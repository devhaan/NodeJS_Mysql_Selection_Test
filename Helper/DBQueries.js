const Hospital_Details = require("../model/Hospital_Details");
const Psychiatrist_Details = require("../model/Psychiatrist_Details");
const Patient_Details = require("../model/Patient_Details");
const handleCountUpdater = (hospital_id, psychiatrist_Id) => {
  Patient_Details.find({ Hospital_Id: hospital_id }, (err, patient) => {
    if (err) {
      console.log(err, "Hospital_DetailsDb Not updated");
    }
    console.log("Psychiatrist_Details CALL");
    Psychiatrist_Details.find(
      { Hospital_Id: hospital_id },
      (err, Psychiatrist) => {
        if (err) {
          console.log(err, "not able to update Psychiatrist_DetailsDB");
        }
        console.log("Hospital_detail CALL");
        Hospital_Details.updateOne(
          { Hospital_Id: hospital_id },
          {
            TotalPatientsCount: patient.length,
            TotalPsychiatristCount: Psychiatrist.length,
          },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Updated Docs : ", data);
            }
          }
        );
      }
    );
  });

  Patient_Details.find(
    { Hospital_Id: hospital_id, Psychiatrist_Id: psychiatrist_Id },
    (err, patient) => {
      if (err) {
        console.log(err, "not able to updta");
      }
      console.log("Psychiatrist_Details 2 CALL");
      Psychiatrist_Details.updateOne(
        { Hospital_Id: hospital_id, Psychiatrist_Id: psychiatrist_Id },
        { TotalPsychiatristPatientsCount: patient.length },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated Docs : ", data);
          }
        }
      );
    }
  );
};

module.exports = { handleCountUpdater };
