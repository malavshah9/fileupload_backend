var db=require('../dbconnection');
var img={
    addImage:function(formbody,filename,callback){

        return db.query("Insert into img_tbl values(?,?)",[null,filename],callback);
    },
    selectAllImgs:function(callback){
        return db.query("select * from img_tbl",callback);
    },
    selectOneImgs:function (id,callback) {
        return db.query("select * from img_tbl where pk_img_id=?",[id],callback);
      },
    deleteImg:function(id,callback){
        return db.query("delete from img_tbl where pk_img_id=?",[id],callback)
    }
}
module.exports=img;