var express=require('express');
var router=express.Router();
var imgmodel=require('../models/imgmodel');
var path = require('path')
var multer = require('multer');




router.get('/:id?', function(req, res, next) {
    if(req.params.id) {
        imgmodel.selectOneImgs(req.params.id,function(err, rows){
          if(err) {
              res.json(err);
          } else {
              res.json(rows);
          }
        });
    } else {
        imgmodel.selectAllImgs(function(err, rows){
          if(err) {
              res.json(err);
          } else {
              res.json(rows);
          }
        });
    }
  });
  

  router.delete('/:id/:path',function(req,res,next){
    console.log(req.params.path);

    var fs = require('fs');
    
    fs.unlink("public/images/uploads/"+req.params.path, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    }); 

    imgmodel.deleteImg(req.params.id,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});




  /*router.delete('/:id',function(req,res,next){




    imgmodel.deleteImg(req.params.id,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});*/

















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