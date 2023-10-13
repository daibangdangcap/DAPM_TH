var mongoose=require('mongoose')
var Schema=mongoose.Schema
var khachHangSchema=new Schema({
    hoTen: {type:String},
    gioiTinh:{type: String},
    diaChi:{type:String},
    taiKhoan: {type:String},
    matKhau: {type: String}
},{collection:'KHACHHANG'})
module.exports=mongoose.model('KHACHHANG',khachHangSchema)