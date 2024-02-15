const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// GET /notes route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

// GET * route
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// GET /api/notes route
router.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  res.json(notes);
});

// POST /api/notes route
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  notes.push(newNote);

  fs.writeFileSync('db.json', JSON.stringify(notes));
  res.json(newNote);
});

module.exports = router;
