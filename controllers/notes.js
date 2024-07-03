const Note = require('../models/notes');
const Application = require('../models/job');
 async function addNote (req, res) {
  const { content } = req.body;
  try {
    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ msg: 'Application not found' });
    // if (app.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    const newNote = new Note({
      application: req.params.id,
      content,
    });
    const note = await newNote.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
 async function getNotes(req, res) {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  addNote,
  getNotes,
};
