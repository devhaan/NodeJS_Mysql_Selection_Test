const Hospital_Details = require("../model/Hospital_Details");

module.exports.hospitalData = (req, res) => {
  //console.log("hospital",req.body.PsychiatristDetails.PsychiatristName)
  Hospital_Details.updateOne(
    {
      Hospital_Id: req.body.HospitalId,
    },
    {
      $push: {
        PsychiatristDetails: {
          PsychiatristId: req.body.PsychiatristDetails.PsychiatristId,
          PsychiatristName: req.body.PsychiatristDetails.PsychiatristName,
        },
      },
    },
    (err, data) => {
      if (err) {
        return res.json({ msg: "not Updated" });
      }

      return res.json({ msg: "Hospital details updated" });
    }
  );
};
