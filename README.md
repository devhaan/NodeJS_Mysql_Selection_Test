# NodeJS_Mysql_Selection_Test

List Of All Major Libraries which Used And Why in this Server App listed belolw:-

    1) "body-parser" //In order to get access to the post data,which allows express to read the body and then parse that into a Json object that we can understand
    
    2) "dotenv"     // To handle environment variables , env is helpul to hide api keys.
    
    3) "express"    // using because of its ease to use , routes and manages server.
    
    4) "mongodb"   // its a Database storing software which is NoSql , and store json objects(in background Store in BSON format)
    
    5) "mongoose"  // Mongoose is a MongoDB ODM i.e (Object database Modelling) that used to translate the code and its representation from MongoDB to the Node.js server
    
    6) "multer"   //for handling multipart/form-data , which is primarily used for uploading files
    
    7) "nodemon"  // Very helpfull why( automatically restarting the node application when file changes in the directory are detected.)
    
    
    
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    List API endpoints details 
    
    1) POST REQUEST ----> http://localhost:8000/patientDB  
    
         InSide BOdy send data as Form-Data
                 example:   PatientName:Mahor Sahab
                            Address:ingle ki goot 
                            EmailAddress:Deve@gmail.com
                            PhoneNo:+919100283017
                            Password:deveS07Deve
                            Hospital_Id:2
                            Psychiatrist_Id:5
    
    2) GET REQUEST -----> http://localhost:8000/hospitalDB
    
        InSide BOdy send data as Form-Data
                   example:  Hospital_Id:2
    
