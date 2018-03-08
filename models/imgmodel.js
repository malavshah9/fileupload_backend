var db=require('../dbconnection');
var img={
    addImage:function(formbody,filename,callback){

        return db.query("Insert into img_tbl values(?,?)",[null,filename],callback);
    }
}
module.exports=img;