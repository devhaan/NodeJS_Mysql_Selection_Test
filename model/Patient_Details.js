const mongoose = require("mongoose");

const PatienDetailsData = new mongoose.Schema({
  PatientId: {
    type: Number,
    required: true,
  },
  PatientName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PsychiatristId: {
    type: String,
  },
  Hospital_Id: {
    type: Number,
  },
});

const PatienDetails = mongoose.model("PatienDetails", PatienDetailsData);

module.exports = PatienDetails;
