import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { cartItem } from 'src/app/services/cart-item/cartItem.service';

@Component({
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.css'],
  providers:[API]
})
export class CartHistoryComponent implements OnInit{

  constructor(private http:HttpClient, private api:API, private auth:AuthService){}

  listOrder:any[]=[]
  getOrderList(){
    const user=this.auth.getUser()
    this.http.get(this.api.getAPI()+'donHang/danhSachDonHang/'+user._id).subscribe((data:any)=>{
      this.listOrder=data
    })
  }

  ngOnInit(): void {
      this.getOrderList()
  }
}
