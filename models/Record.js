const mongoose = require('mongoose');

//------------ Record Schema ------------//
const RecordSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    default: false
  },
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;