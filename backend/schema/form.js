const mongoose = require('mongoose');

//Schema
const formSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Required field'],
    },
    name: {
      type: String,
      required: [true, 'Required field'],
    },
    message: {
      type: String,
      required: [true, 'Required field'],
    },
  }
);

//Model
const FormModel = mongoose.model('contact', formSchema);

module.exports = FormModel;
