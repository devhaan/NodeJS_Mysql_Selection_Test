const Hospital_Details = require("../model/Hospital_Details");
const Psychiatrist_Details = require("../model/Psychiatrist_Details");
module.exports.hospitalData = (req, res) => {
  console.log(req.body.Hospital_Id);
  let data = {};

  Hospital_Details.find(
    { Hospital_Id: req.body.Hospital_Id },
    {
      HospitalName: 1,
      _id: 0,
      TotalPsychiatristCount: 1,
      TotalPatientsCount: 1,
    },
    (err, hospital) => {
      if (err) {
        return res.json({ error: err });
      }

      Psychiatrist_Details.find(
        { Hospital_Id: req.body.Hospital_Id },
        {
          Psychiatrist_Id: 1,
          PsychiatristName: 1,
          TotalPsychiatristPatientsCount: 1,
          _id: 0,
        },
        (err, psychiatrist) => {
          if (err) {
            return res.json({ error: err });
          }
          let obj1 = {};

          
          obj1 = hospital;
          console.log(hospital[0].HospitalName)

          return res.json({ "Hospital name": hospital[0].HospitalName,
                            "Total Psychiatrist count ": hospital[0].TotalPsychiatristCount,
                             "Total patients count": hospital[0].TotalPatientsCount,
                            "Psychiatrist Details":psychiatrist});
        }
      );
    }
  );
};
