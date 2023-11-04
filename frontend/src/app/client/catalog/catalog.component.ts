import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { route } from '../../route.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[route]

})
export class CatalogComponent implements OnInit {
  activeIndex = 0;  
  selectedImage: string = 'assets/images/client/homepage/andoduong.png';
  imageNumber: number = 1;
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
  //FUNCTIONS
  onClickItem(index: number) {
    this.activeIndex = index;
  }

  showImage(imageNumber: number) {
    switch (imageNumber) {
      case 1:
        this.selectedImage  = 'assets/images/client/homepage/andoduong.png';
        break;
      case 2:
        this.selectedImage = 'assets/images/client/homepage/thaibinhduong.png';
        break;
      case 3:
        this.selectedImage = 'assets/images/client/homepage/bacbangduong.png';
        break;
      case 4:
        this.selectedImage = 'assets/images/client/homepage/namdaiduong.png';
        break;
    }
  }
}
