var express=require('express');
var router=express.Router();
var imgmodel=require('../models/imgmodel');
var path = require('path')
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

router.post('/', upload.single('image'), (req, res, next) => {
  
    // console.log(req.body);
    // console.log(req.file.filename);

    imgmodel.addImage(req.body,req.file.filename,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);//or return count for 1 or 0
        }
    });
});
module.exports=router;