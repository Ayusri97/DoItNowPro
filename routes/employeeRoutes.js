var express = require('express');
var router = express.Router();
var EmployeeCollection = require('../models/employeeSchema');
const jwt = require('jsonwebtoken')

router.post('/create', (req, res, next) => {
    var ec = new EmployeeCollection({
        Name: req.body.Name,
        Address: req.body.Address,
        Email: req.body.Email,
        Password: req.body.Password
    });
    ec.save((err, Employee) => {
        if (err)
            res.status(500).json({ errmsg: err });
            let payload = { subject: EmployeeCollection._id}
            let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token});
       

    });
});
router.get('/read', (req, res, next) => {
    EmployeeCollection.find({}, (err, AllData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: AllData });
    });
});

router.put('/update', (req, res, next) => {
    EmployeeCollection.findById(req.body._id, (err, UpdatedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
            UpdatedData.Name = req.body.Name;
            UpdatedData.Address = req.body.Address;
            UpdatedData.Email = req.body.Email;
            UpdatedData.Password = req.body.Password;
            UpdatedData.save((err, UpdatedData) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: UpdatedData });
        });
    });
});
router.delete('/delete/:id' , (req, res, next) => {
    EmployeeCollection.findOneAndRemove({ _id: req.params.id }, (err, deletedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: deletedData });

    });
});

router.post('/login', (req, res) => {
    EmployeeCollection.findOne({
        Email: req.body.Email
    }, (error, EmployeeCollection) => {
        if (error) {
            console.log(error)
        } else {
            if (!EmployeeCollection) {
                res.status(401).send('invalid email')
            } else if (EmployeeCollection.Password != req.body.Password) {
                res.status(401).send('invalid password')
            } else {
                let payload = { subject: EmployeeCollection._id}
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token});
            }
        }
    })
})

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }


module.exports = router;