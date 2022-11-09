const mongoose = require("mongoose");

const Psychiatrist_DetailsData = new mongoose.Schema({
  Hospital_Id: {
    type: Number,
    required: true,
  },
  Psychiatrist_Id: {
    type: Number,
    required: true,
  },
  PsychiatristName: {
    type: String,
    required: true,
  },
  TotalPsychiatristPatientsCount: {
    type: Number,
  },
});

const Psychiatrist_Details = mongoose.model(
  "Psychiatrist_Details",
  Psychiatrist_DetailsData
);

module.exports = Psychiatrist_Details;
