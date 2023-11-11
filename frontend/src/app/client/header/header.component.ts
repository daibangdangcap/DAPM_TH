import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartListService } from 'src/app/services/cart-list/cart-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user:any
  slcart:number
  constructor(private AuthService: AuthService, private cartService: CartListService)
  {  }
  isLoggedIn(){
    this.getUser()
    if(this.user) return true
    else return false;
  }
  getUser(){
    this.user=this.AuthService.getUser()
  }
  countSL(){
    this.slcart = this.cartService.countCartList();
  }
  ngOnInit(): void {
      this.getUser()
      this.countSL()
    }
}
