const mongoose = require("mongoose");

const HospitalDetailsData = new mongoose.Schema({
  Hospital_Id: {
    type: Number,
    required: true,
  },
  HospitalName: {
    type: String,
    required: true,
  },
  TotalPsychiatristCount: {
    type: Number,
  },
  TotalPatientsCount: {
    type: Number,
  },
});

const HospitalDetails = mongoose.model("HospitalDetails", HospitalDetailsData);

module.exports = HospitalDetails;
