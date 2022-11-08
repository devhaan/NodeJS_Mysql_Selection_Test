const express = require("express");
const upload = require("multer")();
const router = express.Router();

const PatientDetailDB = require("../controller/PatientDetailDB");
const HospitalDetailsDB = require("../controller/HospitalDetails");
console.log("router is up");

router.post("/patientDB", upload.any(), PatientDetailDB.patientData);
router.post("/hospitalDB", upload.any(), HospitalDetailsDB.hospitalData);
module.exports = router;
