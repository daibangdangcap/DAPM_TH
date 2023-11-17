import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartListService } from 'src/app/services/cart-list/cart-list.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [API],
})
export class HeaderComponent implements OnInit {
  user: any;
  slcart: number;
  tenSP: string;
  searchResults: any[];
  constructor(
    private AuthService: AuthService,
    private cartService: CartListService,
    private http: HttpClient,
    private proService: SearchService,
    private router:Router
  ) {}
  isLoggedIn() {
    this.getUser();
    if (this.user) return true;
    else return false;
  }
  getUser() {
    this.user = this.AuthService.getUser();
  }
  countSL() {
    this.slcart = this.cartService.countCartList();
  }
  search(){
    this.proService.searchProducts(this.tenSP).subscribe(
      (data)=>{
        this.searchResults =data;
        console.log(data.data);
      },
      (error)=>{
        console.error(error);
      }
    )
    this.router.navigate(['/Search'], { queryParams: { tenSP: this.tenSP } });
  }
  ngOnInit(): void {
    this.getUser();
    this.countSL();
  }
}
