import { route } from '../../route.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[route]
})
export class ProductComponent implements OnInit{
  listSP:any[]=[]
  API:string=''
  constructor(public http:HttpClient, public route: route, private router:Router)
  {
    this.API=route.getAPI()
  }
  getAllPro(){
    this.http.get(this.API+'/sanpham/getAllSanPham').subscribe((data:any)=>{
      data.forEach((item:any)=>{
        this.listSP.push(item)
        console.log(item)
      })
    })
  }

  changeToDetailPage(idSanPham){
    this.router.navigate([`/product-detail`,idSanPham])
  }

  ngOnInit(): void {
      this.getAllPro();
  }
}
