var express=require('express');
var router=express.Router();
var mailmodel=require('../models/mailmodel');


router.post('/', function (req, res, next) {

    mailmodel.sendMail(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            return res.json({
                success: true,
                msg: 'sent'
            });
        }
    })
});

module.exports=router;