/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Snippets              ->  index
 * POST    /Snippets              ->  create
 * GET     /Snippets/:id          ->  show
 * PUT     /Snippets/:id          ->  update
 * DELETE  /Snippets/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Snippet = require('./snippet.model'),
    Tag = require('../tag/tag.model');

// Get list of Snippets
exports.index = function(req, res) {
  Snippet.find(function (err, Snippets) {
    if(err) { return handleError(res, err); }
    return res.json(200, Snippets);
  });
};

// Get a single Snippet
exports.show = function(req, res) {
  Snippet.findById(req.params.id, function (err, Snippet) {
    if(err) { return handleError(res, err); }
    if(!Snippet) { return res.send(404); }
    return res.json(Snippet);
  });
};

// Creates a new Snippet in the DB.
exports.create = function(req, res) {
  Snippet.create(req.body, function(err, Snippet) {
    if(err) { return handleError(res, err); }

    Snippet.tags.forEach( function(tag){

      // Add new tag if it doesn't exist, or increment 'snippets' field for existing tag
      Tag.count({name: tag}, function(err, count){
        if(count>0){          
          Tag.findOneAndUpdate( {name: tag}, {$inc: {snippets: 1}}, function(err, tag) {
            if(err) { return handleError(res, err); }
            console.log(tag);
          })
        } else {
          Tag.create( {name: tag}, function(err, tag) {
            if(err) { return handleError(res, err); }
            console.log(tag);
          })
        }
      })

    })
    
    return res.json(201, Snippet);
  });
};

// Updates an existing Snippet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Snippet.findById(req.params.id, function (err, Snippet) {
    if (err) { return handleError(res, err); }
    if(!Snippet) { return res.send(404); }
    var updated = _.merge(Snippet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Snippet);
    });
  });
};

// Deletes a Snippet from the DB.
exports.destroy = function(req, res) {
  Snippet.findById(req.params.id, function (err, Snippet) {
    if(err) { return handleError(res, err); }
    if(!Snippet) { return res.send(404); }
    Snippet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}