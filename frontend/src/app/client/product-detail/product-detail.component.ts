import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { API } from 'src/app/services/API.service';
import { cartItem } from 'src/app/services/cart-item/cartItem.service';
import { CartListService } from 'src/app/services/cart-list/cart-list.service';
import { product } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[API, product, cartItem]
})
export class ProductDetailComponent implements OnInit{
  listSP:any[]=[]
  itemCart:cartItem=new cartItem()
  pro:product=new product()
  idProduct:string=''
  constructor(private http:HttpClient,private route:ActivatedRoute, private api:API, private cartlist: CartListService, private router:Router){}


  count=1;
  counter(type:string){
    if(type === 'add'&&this.count<this.pro.soLuong){
      this.count++
    }
    else if(type==='minus' && this.count >1){
      this.count--
    }
  }
  getAllPro(){
    this.http.get(this.api.getAPI()+'sanpham/getAllSanPham').subscribe((data:any)=>{
      data.forEach((item:any)=>{
        this.listSP.push(item)
        console.log(item)
      })
    })
  }

  getDetailProduct(){
    this.http.get(this.api.getAPI()+'sanpham/getDetailSanPham/'+this.pro.idPro).subscribe((data:any)=>{
      this.pro.tenSP=data.tenSP
      this.pro.giaTien=data.giaTien
      this.pro.loaiCa=data.loaiCa
      this.pro.moTa=data.moTa
      this.pro.ngayTao=data.ngayTao
      this.pro.tenImageSP=data.hinhAnh[0].tenImageSP
      this.pro.dataImageSP=data.hinhAnh[0].dataImageSP
      this.pro.contentTypeSP=data.hinhAnh[0].contentTypeSP
      this.pro.soLuong=data.soLuong
      this.pro.trongLuong=data.trongLuong
      this.pro.idPro=data._id
    })
  }
  changeToDetailPage(id){
    this.router.navigate([`/Product-Detail`,id]);
    this.pro.idPro = id;
    this.getDetailProduct();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.pro.idPro=params.get('idProduct')
    })
    this.getDetailProduct();
    this.getAllPro();
  }

  addToCartList(){
    this.itemCart.id=this.pro.idPro
    this.itemCart.hinhAnh=this.pro.tenImageSP
    this.itemCart.tenSP=this.pro.tenSP
    this.itemCart.giaTien=this.pro.giaTien
    this.itemCart.soLuongHienCo=this.pro.soLuong-this.count
    this.itemCart.soLuongMua=this.count
    this.itemCart.thanhTien=this.itemCart.soLuongMua*this.itemCart.giaTien
    this.cartlist.addItemIntoList(this.itemCart)
    console.log("thêm thành công")
    window.location.reload();
  }
}
