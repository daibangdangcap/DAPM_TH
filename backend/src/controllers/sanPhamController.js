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

var getSPFromOcean=async(req,res)=>{
    var sp=await sanPhamService.getSPFromOcean(req)
    res.send(sp)
}
var findSP = async(req,res)=>{
    console.log(req.params.tenSP)
    var sp = await sanPhamService.findSP(req.params.tenSP)
    if (sp){
        res.send({"status":true, 'data':sp})
    }
    else
    {
        res.send({"status":false});
    }
}
module.exports={createNewSanPham,getAllSanPham,getDetailSanPham,getSPFromOcean, findSP}