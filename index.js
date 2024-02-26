// Server.js
const express = require('express');
const students = require('./Student');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const StudentModel =require('./models/student')
const CounselorModel = require('./models/counsellor')
app.use(express.static('public'));

app.use(express.json());
app.use(cors());

mongoose.connect("MONGODB URI")
    .then(response => {
        console.log("Database Connected Successfully")
        console.log("MongoDB is running...")
    })
    .catch(err => {
        console.log("Error Connecting in Database " + err.message)
    })

// API route to serve student data
// app.get('/api/students', (req, res) => {
//   res.json(students);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Server.js

const counselors = require('./Counselor');


const parents = require("./Parent");

app.get("/parents", (req, res) => {
  res.json(parents);
});


// API route to serve counselor data
app.get('/api/counselors', (req, res) => {
  res.json(counselors);
});

app.post('/insertStudent',(req,res)=>{
  StudentModel.create(req.body)
  .then(result =>{
    console.log("Inserted Succesfully")
  })
  .catch(err=>{
    console.log("Error Inserting "+err.message)
  })
})

app.get("/viewStudents",(req,res)=>{
  StudentModel.find().lean()
  .then(students=>res.json(students))
  .catch(err=>console.log("Error Fetching"+err.message))
})

app.post('/insertCounsellor',(req,res)=>{
  CounselorModel.create(req.body)
  .then(result =>{
    console.log("Inserted Succesfully")
  })
  .catch(err=>{
    console.log("Error Inserting "+err.message)
  })
})

app.get("/viewCounsellors",(req,res)=>{
  CounselorModel.find().lean()
  .then(counselors=>res.json(counselors))
  .catch(err=>console.log("Error Fetching"+err.message))
})


