const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { readAndAppend, readFromFile } = require('../helper/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET /api/notes route
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST /api/notes route
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  readAndAppend(newNote, './db/db.json');

  res.json(newNote);
});

// GET * route
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;
