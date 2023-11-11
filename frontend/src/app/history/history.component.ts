import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { API } from '../services/API.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [API]
})
export class HistoryComponent implements OnInit {
  activeIndex = 1;  
  listOrder:any[]=[]

  constructor(private http:HttpClient, private api: API, private authService:AuthService, private router:Router){}
  onClickItem(index: number) {
    this.activeIndex = index;
  }
  getOrderList(){
    const user=this.authService.getUser()
    this.http.get(this.api.getAPI()+'donHang/danhSachDonHang/'+user._id).subscribe((data:any)=>{
      this.listOrder=data
    })
  }
  logOut(){
    this.authService.LogOut()
    this.router.navigate([`/HomePage`])
  }
  ngOnInit(): void {
    this.getOrderList();
  }

  changeToDetailPage(){
    
  }
}
