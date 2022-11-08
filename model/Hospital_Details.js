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
  PsychiatristDetails: [{
    PsychiatristId: {
      type: Number,
    },
    PsychiatristName: {
      type: String,
    },
    PsychiatristPatientsCount: {
      type: Number,
    },
    PsychiatristPatientsIds: {
        type: Array,
    },
  }],
});

const HospitalDetails = mongoose.model("HospitalDetails", HospitalDetailsData);

module.exports = HospitalDetails;
