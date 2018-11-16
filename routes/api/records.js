const express = require('express');
const router = express.Router();

// Record Model
const Record = require('../../models/Record');

// @route GET api/records
// @desc Get all Records
// @access Public

router.get('/', (req, res) => {
   Record.find()
   .sort({ name: 1})
   .then(records => res.json(records)) 
});

// @route POST api/records
// @desc Create a post
// @access Public

router.post('/', (req, res) => {
const newRecord = new Record({
    name: req.body.name,
    artist: req.body.artist,
    description: req.body.description
});

newRecord.save().then(record => res.json(record));
});



module.exports = router;