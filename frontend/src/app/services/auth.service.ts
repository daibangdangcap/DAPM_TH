import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any
  isLoggedIn: boolean = false;
  constructor() { }
  getUser()
  {
    this.user=JSON.parse(localStorage.getItem('user'))
    return this.user
  }

  setUser(user:any){
    this.user=user
    localStorage.setItem('user',JSON.stringify(this.user))
  }

  LogIn(user:any){
    this.isLoggedIn = true;
    this.setUser(user)
  }
  LogOut(){
    localStorage.removeItem('user')
    this.isLoggedIn = false;
  }
}
