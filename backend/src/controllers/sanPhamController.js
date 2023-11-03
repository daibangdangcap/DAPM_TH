var sanPhamService=require('../services/sanPhamService')

var createNewSanPham=async(req,res)=>{
    var createSP=await sanPhamService.createNewSanPham(req)
    res.send(createSP)
}

var getAllSanPham=async(req,res)=>{
    var listSP=await sanPhamService.getAllSanPham()
    res.send(listSP)
}

var getDetailSanPham=async(req,res)=>{
    var sp=await sanPhamService.getDetailSanPham(req.params.idProduct)
    res.send(sp)
}

module.exports={createNewSanPham,getAllSanPham,getDetailSanPham}