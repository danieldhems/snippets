'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
	name: String,
	snippets: Number,
	date_created: Date
})

module.exports = mongoose.model('Tag', TagSchema);