var mongoose=require('mongoose')
var Schema=mongoose.Schema
var khachHangVertificationSchema=new Schema({
    userId:{type:String},
    uniqueString:{type:String},
    createAt:{type:Date},
    expireAt: {type:Date}
},{collection:'KHACHHANGVertification'})
module.exports=mongoose.model('KHACHHANGVertification',khachHangVertificationSchema)