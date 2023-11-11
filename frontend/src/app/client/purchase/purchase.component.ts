import { HttpClient } from '@angular/common/http';
import { Component,NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { cartItem } from 'src/app/services/cart-item/cartItem.service';
import { CartListService } from 'src/app/services/cart-list/cart-list.service';
import { informOrder } from 'src/app/services/informOrder.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers:[cartItem, API, informOrder]
})
export class PurchaseComponent implements OnInit{
  constructor(private http:HttpClient, private auth:AuthService, private cartlist:CartListService, private api:API, private router:Router){}
  listSP:cartItem[]=[]
  tongTien: number=0
  soLuong: number=0
  inform: informOrder=new informOrder()
  phuongThucTT: boolean
  getItem(){
    this.listSP=this.cartlist.getCartList()
    this.listSP.forEach(item=>{
      this.tongTien=this.tongTien+(item.giaTien*item.soLuongMua)
      this.soLuong=this.soLuong+item.soLuongMua
    })
  }
  buyCart()
  {
    if(this.phuongThucTT==true)
    {
      this.inform.phuongThucTT='Tiền mặt'
    }
    else this.inform.phuongThucTT='Chuyển khoản'
    this.auth.getUser()
    this.http.post(this.api.getAPI()+'donHang/buyDonHang',{listSP:this.listSP, idUser:this.auth.user._id, inform:this.inform}).subscribe((data:any)=>{
      console.log('success')
      localStorage.removeItem('cartList')
      this.router.navigate([`Purchase-Notice`])
    })

  }
  
  goBack(){
    this.router.navigate([`/Cart`])
  }

  ngOnInit(): void {
      this.getItem()
  }
}
