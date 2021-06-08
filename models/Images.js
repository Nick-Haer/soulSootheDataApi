const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      default: '',
  },
  animated: {
      type: Boolean,
      required: true,
  },
  views: {
      type: Number,
      required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  section: {
      type: String,
      required: true,
  },
  datetime: {
    type: Date,
    default: Date.now(),
  },
  link: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;