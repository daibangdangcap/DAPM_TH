var mongoose=require('mongoose')
var Schema= mongoose.Schema
var donHangSchema=new Schema({
            ngayDat: {
                type:Date,
                default: Date.now
            },
            tongSLMua: {type:Number, int:true},
            tongTien: {type: Number},
            CTDH: {type:[
                {
                    idSP: {type: mongoose.Schema.Types.ObjectId,ref:'SANPHAM'},
                    soLuongMua: {type:Number, int: true},
                    thanhTien: {type: Number}
                }
            ]}
},{collection:'DONHANG'})
module.exports=mongoose.model('DONHANG',donHangSchema)