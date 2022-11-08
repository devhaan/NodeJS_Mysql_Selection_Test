

const DB='mongodb+srv://devhaan:dev07dev@cluster0.zldnps0.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require('mongoose');

mongoose.connect(DB,{})
.then(()=>{
    console.log('Connected to Mongo');
})
.catch(err =>{
    console.log('Error connecting to Mongo');
});