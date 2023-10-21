var express=require('express')
const router=express.Router()

var sanPhamController=require('../src/controllers/sanPhamController')
var khachHangController=require('../src/controllers/khachHangController')
var donHangController=require('../src/controllers/donHangController')
var upload=require('../middleware/upload')
router.route('/sanpham/createNewSanPham').post(upload.upload.array('images',3),sanPhamController.createNewSanPham)

module.exports=router