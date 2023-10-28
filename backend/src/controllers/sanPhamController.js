var sanPhamService=require('../services/sanPhamService')

var createNewSanPham=async(req,res)=>{
    var createSP=await sanPhamService.createNewSanPham(req)
    res.send(createSP)
}

var getAllSanPham=async(req,res)=>{
    var listSP=await sanPhamService.getAllSanPham()
    res.send(listSP)
}

module.exports={createNewSanPham,getAllSanPham}