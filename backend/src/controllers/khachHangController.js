var khachHangService=require('../services/khachHangService')

var dangKy=async(req,res)=>{
    var user=khachHangService.dangKy(req)
    res.send(user)
}
var getVerify=(req,res)=>{
    var verify=khachHangService.getVerify(req)
}

module.exports={dangKy, getVerify}