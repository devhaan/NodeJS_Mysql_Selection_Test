const validatePhone = (phone) => {
    var phoneNo = /^\+?([0-9]{2})\)?([0-9]{10})$/;
    if (phone.match(phoneNo)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validateEmailAddress = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
  
    return false;
  };
  const validatePatientName = (name) => {
    return name.length != 0;
  };
  const validateAddress = (Address) => {
    return Address.length > 9;
  };
  const validatePassword = (password) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  
    if (password.match(passw)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validateFileisValidOrNot = (file) => {
    if (file == undefined) {
      return false;
    } else {
      if (file.mimetype != "image/jpeg") return false;
      else return true;
    }
  };
  const validateHospitalPsychiatrist=(hos_id,psy_id)=>{
   
    if(hos_id == undefined || psy_id == undefined || hos_id=="" || psy_id==""){
      return false;
    }
    else{
      return true;
    }
  }
  
  module.exports.validator = (data, fileData) => {
    // validate number
  
    let list = [];
    if (!validatePhone(data.PhoneNo)) {
      list.push("Invalid number Please Enter Valid number with country code");
    }
    if (!validatePatientName(data.PatientName)) {
      list.push("Please Fill Patient Name Its required");
    }
    if (!validateAddress(data.Address)) {
      list.push(
        "Address must be contain Street city and length must be greater than 10 characters"
      );
    }
    if (!validatePassword(data.Password)) {
      list.push(
        "Enter Valid Password (must contain one number, lower and upper character and length between 8-15"
      );
    }
    if (!validateEmailAddress(data.EmailAddress)) {
      list.push("Enter Correct Email Format");
    }
  
    if (!validateFileisValidOrNot(fileData)) {
      list.push("File must be Image/Insert file Please");
    }
    if (!validateHospitalPsychiatrist(data.Hospital_Id, data.Psychiatrist_Id)) {
      list.push("Please Provide hospital id and psychiatrist_Id");
    }
    return list;
  };

  
