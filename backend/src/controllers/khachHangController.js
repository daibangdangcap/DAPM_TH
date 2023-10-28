var khachHangService=require('../services/khachHangService')

var dangNhap=async(req)=>{
    var user=khachHangService.dangNhap(req)
    res.send(user)
}
module.exports={dangNhap}