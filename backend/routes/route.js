var express=require('express')
const router=express.Router()

var sanPhamController=require('../src/controllers/sanPhamController')
var khachHangController=require('../src/controllers/khachHangController')
var donHangController=require('../src/controllers/donHangController')
var upload=require('../middleware/upload')

//SẢN PHẨM
router.route('/sanpham/createNewSanPham').post(upload.upload.array('images',3),sanPhamController.createNewSanPham) //tạo sản phẩm mới
router.route('/sanpham/getAllSanPham').get(sanPhamController.getAllSanPham) //lấy danh sách sản phẩm

//KHÁCH HÀNG
router.route('/khachhang/dangKy').post(khachHangController.dangKy)
router.route('/khachhang/verify-email').get(khachHangController.getVerify)

module.exports=router