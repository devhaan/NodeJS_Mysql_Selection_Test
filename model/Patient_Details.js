const mongoose = require("mongoose");

const PatienDetailsData = new mongoose.Schema({
  Hospital_Id: {
    type: Number,
    required: true,
  },
  Patient_Id: {
    type: String,
  },
  PatientName: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Psychiatrist_Id: {
    type: String,
  },
  Hospital_Id: {
    type: Number,
  },
  Patient_Image: {
    data: { type: Buffer },
    contentType: { type: String },
  },
});

const PatienDetails = mongoose.model("PatienDetails", PatienDetailsData);

module.exports = PatienDetails;
