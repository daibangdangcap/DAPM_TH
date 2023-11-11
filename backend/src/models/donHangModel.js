var mongoose=require('mongoose')
var Schema= mongoose.Schema
var donHangSchema=new Schema({
            nameUser:{type: String},
            emailAddress:{type:String},
            sdt:{type:String},
            addressDelivery:{type:String},
            ngayDat: {
                type:Date,
                default: Date.now
            },
            tongSLMua: {type:Number, int:true},
            tongTien: {type: Number},
            phuongThucTT:{type: String},
            CTDH: {type:[
                {
                    idSP: {type: mongoose.Schema.Types.ObjectId,ref:'SANPHAM'},
                    soLuongMua: {type:Number, int: true},
                    thanhTien: {type: Number}
                }
            ]}
},{collection:'DONHANG'})
module.exports=mongoose.model('DONHANG',donHangSchema)