var donHangModel=require('../models/donHangModel');
const khachHangModel = require('../models/khachHangModel');

var buyDonHang=async(req)=>{
    var listSP=[]
    var tongTien=0;
    var tongSL=0;
    req.body.listSP.forEach(item=>{
        console.log(item)
        var thanhTien=item.giaTien*item.soLuongMua
        tongTien=tongTien+thanhTien
        tongSL=tongSL+item.soLuongMua
        listSP.push({
            idSP:item.id,
            soLuongMua:item.soLuong,
            thanhTien:thanhTien
        })
    })
    var donHang=new donHangModel({
        tongSLMua:tongSL,
        tongTien:tongTien,
        CTDH:listSP
    })
    donHang.save().then(document=>{
        console.log('success')
    })

    khachHangModel.findById(req.body.idUser).then(document=>{
        console.log(document)
        document.cacDonHang.push(donHang.id)
        document.save().then(console.log('Success'))
    })
    return donHang
}


module.exports={buyDonHang}