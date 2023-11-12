import { ToastService } from './../services/toastService/toast.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartListService } from '../services/cart-list/cart-list.service';
import { cartItem } from '../services/cart-item/cartItem.service';
import { API } from '../services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers:[API]
})
export class CartListComponent implements OnInit{
  listSP:cartItem[]=[]
  idUser=''
  tongTien:number=0
  countSL:number=0;
  constructor(private http:HttpClient ,private cartlist:CartListService, private api:API, private auth:AuthService,private router:Router
    , private toastMessage:ToastService){}
  ngOnInit(): void {
    this.getCartList()
  }

  getCartList(){
    this.listSP=this.cartlist.getCartList()
    this.listSP.forEach(item=>{
      this.tongTien=this.tongTien+item.thanhTien
      this.countSL=this.countSL+item.soLuongMua
    })
  }

  changeToPurchasePage(){
    if(this.listSP.length==0)
    {
      this.toastMessage.show('Chưa có sản phẩm nào trong giỏ hàng của bạn')
    }
    else this.router.navigate(['/Purchase']);
  }
  backToCatalog() {
    this.router.navigate(['/Catalog']);
  }
  count=0;
  counter(type:string){
    if(type === 'add'){
      this.count++
    }
    else if(type==='minus' && this.count >0){
      this.count--
    }
  }
  deleteIt(item:cartItem){
    this.cartlist.deleteItem(item);
    this.cartlist.getCartList()
    window.location.reload()
  }
}
