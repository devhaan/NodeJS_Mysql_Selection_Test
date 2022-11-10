const Patient_Details = require("../model/Patient_Details");
const Helper = require("../Helper/helper");

module.exports.patientData = (req, res) => {
   

  let validation = Helper.validator(req.body,req.files[0]);
  if (validation.length == 0) {
    Patient_Details.find({ PhoneNo: req.body.PhoneNo }, (err, patient) => {
      if (err) {
        return res.json({
          "error Type": err,
          msg: "some error occurred while fetch database",
        });
      }

      if (patient.length > 0) {
        return res.json({
          patient: req.body.Patient,
          msg: "Already exists in DB",
        });
      } else {
        let Patient_Count = 0;
        Patient_Details.find({}, (err, patient) => {
          if (err) {
            console.log(err, "Not able to count patient");
            return;
          }
          Patient_Count = patient.length;
          Patient_Details.create(
            {
              Patient_Id: Patient_Count + 1,
              PatientName: req.body.PatientName,
              Address: req.body.Address,
              EmailAddress:req.body.EmailAddress,
              PhoneNo: req.body.PhoneNo,
              Password: req.body.Password,
              Hospital_Id: req.body.Hospital_Id,
              Psychiatrist_Id: req.body.Psychiatrist_Id,
              Patient_Image:{data:req.files[0].buffer,contentType:req.files[0].mimetype}
            },
            (err) => {
              if (err) {
                return res.json({
                  "error Type": err,
                  msg: "some error occurred while Storing in database",
                });
              }
              Helper.handleCountUpdater(
                req.body.Hospital_Id,
                req.body.Psychiatrist_Id
              );
              return res.json({
                msg: "Patient Successfully inserted",
              });
            }
          );
        });
      }
    });
  } else {
    return res.json({
      Error: validation,
    });
  }
};
