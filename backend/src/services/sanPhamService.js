var sanPhamModel=require('../models/sanPhamModel')
var loaiDaiDuongModel=require('../models/loaiDaiDuongModel')

var createNewSanPham=async(product)=>{
    var productItem=new sanPhamModel()
    productItem.tenSP=product.body.tenSP
    productItem.moTa.push(product.body.moTa1)
    productItem.moTa.push(product.body.moTa2)
    productItem.moTa.push(product.body.moTa3)
    productItem.ngayTao=new Date()
    productItem.loaiCa=product.body.loaiCa
    productItem.trongLuong=product.body.trongLuong
    productItem.soLuong=product.body.soLuong
    productItem.giaTien=product.body.giaTien
    product.files.forEach(item=>{
        var object={
            tenImageSP: item.originalname,
        dataImageSP: item.size,
        contentTypeSP: item.mimetype
        }
        productItem.hinhAnh.push(object)
    })
    productItem.save().then((document)=>console.log(document))

    var saveDaiDuong=loaiDaiDuongModel.findOne({tenLoaiDaiDuong:productItem.loaiCa}).then(document=>{
        document.idCacSP.push(productItem._id)
        document.save().then(()=>{console.log("Success")})
    })
    return productItem
}

var getAllSanPham=async()=>{
    var listSP=sanPhamModel.find({}).then(document=>{
        return document;
    })
    return listSP;
}


var getDetailSanPham=async(idProduct)=>{
    var sp=await sanPhamModel.findById(idProduct)
    return sp
}


var getSPFromOcean=async(req)=>{
    var sp=await loaiDaiDuongModel.findOne({tenLoaiDaiDuong:req.body.daiDuong}).then( async document=>{
        var listID= await document.idCacSP
        var listSP= []
        var listproduct=await listID.map(async itemID=>{
            return await sanPhamModel.findById(itemID)
        })
        listSP=await Promise.all(listproduct)
        console.log(listSP)
        return listSP
    })
    return sp
}
var findSP = async(tenSP)=>
{
    return new Promise(function myFn(resolve,reject)
    {
        var regex = new RegExp(tenSP, 'i');
        return sanPhamModel.find({tenSP:{ $regex: regex}}).then((result)=>
        {
            resolve(result)
        })
        .catch((error)=>{
            reject(error);
        })
    })
}

module.exports={createNewSanPham,getAllSanPham,getDetailSanPham, getSPFromOcean, findSP}