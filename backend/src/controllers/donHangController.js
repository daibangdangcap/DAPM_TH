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

var CTDH=async(req,res)=>{
    var list=donHangService.CTDH(req)
    res.send(list)
}

module.exports={buyDonHang,danhSachDonHang, CTDH}