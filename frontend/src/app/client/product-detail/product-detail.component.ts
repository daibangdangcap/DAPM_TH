import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { route } from 'src/app/route.service';
import { API } from 'src/app/services/API.service';
import { product } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[API, product, route]
})
export class ProductDetailComponent implements OnInit{
  pro:product=new product() 
   listSP:any[]=[]
  idProduct:string=''
  API:string=''

  constructor(private http:HttpClient,private route:ActivatedRoute, private api:API ){  }
  count=0;
  counter(type:string){
    if(type === 'add'){
      this.count++
    }
    else if(type==='minus' && this.count >0){
      this.count--
    }
  }
  getAllPro(){
    this.http.get(this.api+'/sanpham/getAllSanPham').subscribe((data:any)=>{
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



  ngOnInit(): void {
    this.getAllPro();
    this.route.paramMap.subscribe((params)=>{
      this.pro.idPro=params.get('idProduct')
    })
    this.getDetailProduct()
  }
}
