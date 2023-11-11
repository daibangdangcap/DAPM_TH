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
        nameUser:req.body.inform.nameUser,
        emailAddress:req.body.inform.email,
        sdt:req.body.inform.sdt,
        addressDelivery:req.body.inform.addressDelivery,
        tongSLMua:tongSL,
        tongTien:tongTien,
        phuongThucTT:req.body.inform.phuongThucTT,
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


var danhSachDonHang=async(req)=>{
    listOrderID=[]
    listOrderItem=[]
    var findOrderID=khachHangModel.findById(req.params.iduser).then(document=>{
        return document.cacDonHang
    })
    listOrderID=await findOrderID
    listOrderItem=await listOrderID.map(async item=>{
        var findOrderItem=await donHangModel.findById(item).then( document=>{
            return document
        })
        return findOrderItem
    })
    listOrderItemA= await Promise.all(listOrderItem)
    return listOrderItemA
}

module.exports={buyDonHang, danhSachDonHang}