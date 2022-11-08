const Patient_Details = require("../model/Patient_Details");
const Hospital_Details = require("../model/Hospital_Details");


module.exports.patientData = (req, res) => {
  
    console.log("patientData",req.body.PatientName)
  
  //   Patient_Details.find({ PhoneNo: req.body.PhoneNo }, (err, patient) => {
  //   if (err) {
  //     return res.json({
  //       "error Type": err,
  //       msg: "some error occurred while fetch database",
  //     });
  //   }

  //   if (patient.length > 0) {
  //     return res.json({
  //       patient: req.body.Patient,
  //       msg: "Already exists in DB",
  //     });
  //   } else {

  //     let Patient_Count;
  //     Patient_Details.find({},(err, patient) => {
  //       if(err) {console.log(err,"Not able to count patient");return;};
  //       Patient_Count=patient.length;
  //     }
          
  //     );
  //     Patient_Details.create(
  //       {
  //         PatientId:(Patient_Count+1),
  //         PatientName: req.body.PatientName,
  //         Address: req.body.Address,
  //         PhoneNo: req.body.PhoneNo,
  //         Password: req.body.Password,
  //         Hospital_Id: req.body.Hospital_Id,
  //         PsychiatristId: req.body.PsychiatristId,
  //       },
  //       (err) => {
  //         if (err) {
  //           return res.json({
  //             "error Type": err,
  //             msg: "some error occurred while Storing in database",
  //           });
  //         }
          



  //         return res.json({
  //           msg: "Patient Successfully inserted",
  //         });
  //       }
  //     );
  //   }
  // });
  
  return res.json({ msg: "hiii"})
};
