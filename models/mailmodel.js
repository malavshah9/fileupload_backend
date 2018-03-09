var db=require('../dbconnection');
var email=require("emailjs/email");

var mailsend={

sendMail:function(demo,callback){
    
    var server  = email.server.connect({
       user:    "medskyy@gmail.com",
       password:"nopassword1234", 
       host:    "smtp.gmail.com", 
       ssl:     true,
       port:465
    });
    console.log(demo);
    server.send({
       text:    demo.message,
       from:    "medskyy@gmail.com", 
       to:      demo.email,
       subject: "Hello World"
    }, callback);
    }
}

    module.exports=mailsend;