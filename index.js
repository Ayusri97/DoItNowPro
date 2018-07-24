var express = require('express');
var http = require('http');

const path = require('path');
const fs = require('fs');
const multer = require('multer');
var app = express();
const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});



 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});





var appRoutes = require('./routes/employeeRoutes');
var taskRoutes = require('./routes/taskRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors=require('cors');
mongoose.connect('mongodb://him12:him123@ds163650.mlab.com:63650/digiangulardb');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);
app.use('/', taskRoutes);
http.createServer(app).listen(8080);
console.log("BackEnd Server Is On ", 8080);
