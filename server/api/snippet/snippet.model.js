'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SnippetSchema = new Schema({
  name: String,
  body: String,
  date_created: Date
});

module.exports = mongoose.model('Snippet', SnippetSchema);