const express = require("express");
const router = express.Router();

// Record Model
const Record = require("../../models/Record");

// @route GET api/records
// @desc Get all Records
// @access Public

router.get("/", (req, res) => {
  Record.find()
    .sort({ name: 1 })
    .then(records => res.json(records));
});

// @route GET api/records/:id
// @desc Get all Records
// @access Public

router.get("/:id", (req, res) => {
  Record.findById(req.params.id);
});

// @route POST api/records
// @desc Create a record
// @access Public

router.post("/", (req, res) => {
  const newRecord = new Record({
    name: req.body.name,
    artist: req.body.artist,
    description: req.body.description
  });
  newRecord.save().then(record => res.json(record));
});

// @route   Delete api/records/:id
// @desc    Delete A Item
// @access  Public

router.delete("/:id", (req, res) => {
  Record.findById(req.params.id)
    .then(record => record.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
