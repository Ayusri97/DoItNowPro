var express = require('express');
var _router = express.Router();
var multer = require('multer');
var path = require('path');






_router.post('/download', function(req,res,next){
    filepath = path.join(__dirname,'../uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});

module.exports = _router;