var express=require('express')
const router=express.Router()

var sanPhamController=require('../src/controllers/sanPhamController')
var khachHangController=require('../src/controllers/khachHangController')
var donHangController=require('../src/controllers/donHangController')
var upload=require('../middleware/upload')

//SẢN PHẨM
router.route('/sanpham/createNewSanPham').post(upload.upload.array('images',3),sanPhamController.createNewSanPham) //tạo sản phẩm mới
router.route('/sanpham/getAllSanPham').get(sanPhamController.getAllSanPham) //lấy danh sách sản phẩm
router.route('/sanpham/getDetailSanPham/:idProduct').get(sanPhamController.getDetailSanPham)// lấy chi tiết danh sách sản phẩm
router.route('/sanpham/getSPFromOcean').post(sanPhamController.getSPFromOcean)

//KHÁCH HÀNG
router.route('/khachhang/dangKy').post(khachHangController.dangKy)// tạo tài khoản
router.route('/khachhang/verify-email/:token').get(khachHangController.getVerify)// xác thực email
router.route('/khachhang/dangNhap').post(khachHangController.dangNhap)// đăng nhập tài khoản

//ĐƠN HÀNG
router.route('/donHang/buyDonHang').post(donHangController.buyDonHang)
module.exports=router