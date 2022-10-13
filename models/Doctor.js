const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
  },
  otp: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
