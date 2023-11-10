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
  constructor(private http:HttpClient ,private cartlist:CartListService, private api:API, private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    this.getCartList()
  }

  getCartList(){
    this.listSP=this.cartlist.getCartList()
  }

  changeToPurchasePage(){
    this.router.navigate(['/purchase'])
  }
}
