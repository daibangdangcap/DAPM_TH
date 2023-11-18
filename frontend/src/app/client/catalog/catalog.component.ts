import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { route } from '../../route.service';
import { API } from 'src/app/services/API.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[route, API]

})
export class CatalogComponent implements OnInit {
  activeIndex = 0;
  selectedImage: string = 'assets/images/client/homepage/andoduong.png';
  imageNumber: number = 1;
  listSP:any[]=[]
  API: string=''
  constructor(public http:HttpClient, public route: route, private router:Router, private api:API)
  {
    this.API=api.getAPI()
  }
  getAllPro(daiDuong: string){
    this.listSP=[]
    this.http.post(this.API+'sanpham/getSPFromOcean',{daiDuong:daiDuong}).subscribe((data:any)=>{
      data.forEach((item:any)=>{
        this.listSP.push(item)
        console.log(item)
      })
    })
  }

  changeToDetailPage(idSanPham){
    this.router.navigate([`/Product-Detail`,idSanPham])
  }

  ngOnInit(): void {
    this.getAllPro("Ấn Độ Dương");
  }
  //FUNCTIONS
  onClickItem(index: number) {
    this.activeIndex = index;
  }

  showImage(imageNumber: number) {
    switch (imageNumber) {
      case 1:
        this.selectedImage  = 'assets/images/client/homepage/andoduong.png';
        this.getAllPro("Ấn Độ Dương")
        break;
      case 2:
        this.selectedImage = 'assets/images/client/homepage/thaibinhduong.png';
        this.getAllPro("Thái Bình Dương")
        break;
      case 3:
        this.selectedImage = 'assets/images/client/homepage/bacbangduong.png';
        this.getAllPro("Bắc Băng Dương")
        break;
      case 4:
        this.selectedImage = 'assets/images/client/homepage/namdaiduong.png';
        this.getAllPro("Nam Đại Dương")
        break;
    }
  }
}
