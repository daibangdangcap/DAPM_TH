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
module.exports={createNewSanPham}