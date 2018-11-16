const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    artist: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = record = mongoose.model('record', RecordSchema);