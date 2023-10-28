import { route } from '../../route.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[route]
})
export class ProductComponent implements OnInit{
  listSP:any[]=[]
   API:string=''
  constructor(public http:HttpClient, public route: route)
  {
    this.API=route.getAPI()
  }
  getAllPro(){
    this.http.get('http://localhost:3800'+'/sanpham/getAllSanPham').subscribe((data:any)=>{
      data.forEach((item:any)=>{
        this.listSP.push(item)
        console.log(item)
      })
    })
  }
  ngOnInit(): void {
      this.getAllPro();
  }
}
