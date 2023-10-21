var sanPhamService=require('../services/sanPhamService')

var createNewSanPham=async(req,res)=>{
    var createSP=await sanPhamService.createNewSanPham(req)
    res.send(createSP)
}

module.exports={createNewSanPham}