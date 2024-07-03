const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
  application: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: false },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Note', NoteSchema);



















// const mongoose = require('mongoose');
// const job = require('../models/job');

// NoteSchema = new mongoose.Schema({
//     id: { type:mongoose.Schema.Types.ObjectId,
//          required: false,
//          ref:"job"
//         },
//     Notes:{ type: "string",
//         required: false,
//         createdAt: { type: Date, default: Date.now }
//     },
//     });

// const Note = mongoose.model('NoteSchema',NoteSchema);

// module.exports = Note;