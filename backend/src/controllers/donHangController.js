var donHangService=require('../services/donHangService')

var buyDonHang=async(req,res)=>{
    var donHang=donHangService.buyDonHang(req)
    res.send(donHang)
}

module.exports={buyDonHang}