var mongoose=require('mongoose')
var Schema=mongoose.Schema
var loaiSPSchema=new Schema({
    tenLoaiDaiDuong: {type: String},
    idCacSP:[{type: mongoose.Schema.Types.ObjectId,ref:'SANPHAM'}]
},{collection:'LOAIDAIDUONG'})
module.exports=mongoose.model('LOAIDAIDUONG',loaiSPSchema)