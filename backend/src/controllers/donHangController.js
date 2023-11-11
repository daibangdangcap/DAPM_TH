var donHangService=require('../services/donHangService')

var buyDonHang=async(req,res)=>{
    var donHang=donHangService.buyDonHang(req)
    res.send(donHang)
}

var danhSachDonHang=async(req,res)=>{
    var listOrder=await donHangService.danhSachDonHang(req)
    console.log(listOrder)
    res.send(listOrder)
}

module.exports={buyDonHang,danhSachDonHang}