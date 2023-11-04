import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { route } from 'src/app/route.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [route]
})
export class HomepageComponent {
	images1 = ['../../../assets/images/client/homepage/bannerA1.png','../../../assets/images/client/homepage/slider2.png','../../../assets/images/client/homepage/slider3.png'];
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
