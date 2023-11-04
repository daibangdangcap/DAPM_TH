var khachHangService=require('../services/khachHangService')

var dangKy=async(req,res)=>{
    var user=await khachHangService.dangKy(req)
    res.send(user)
}
var getVerify=(req,res)=>{
    var verify=khachHangService.getVerify(req)
}

var dangNhap=async(req,res)=>{
    var user=await khachHangService.dangNhap(req)
    if(user==="Invalid password")
    {
        res.send({invalidPass: user})
    }
    else if(user==="Email's incorrect!")
    {
        res.send({invalidEmail:user})
    }
    else res.send(user)
}
module.exports={dangKy, getVerify,dangNhap}