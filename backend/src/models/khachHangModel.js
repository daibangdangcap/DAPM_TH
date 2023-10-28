var mongoose=require('mongoose')
var Schema=mongoose.Schema
var khachHangSchema=new Schema({
    hoTen: {type:String},
    email:{type: String},
    sdt:{type:String},
    matKhau: {type: String},
    verified:{type: Boolean}
},{collection:'KHACHHANG'})
module.exports=mongoose.model('KHACHHANG',khachHangSchema)