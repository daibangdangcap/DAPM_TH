import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;  
  constructor() { }
  LogIn(){
    this.isLoggedIn = true;
  }
  LogOut(){
    this.isLoggedIn = false;
  }
}
