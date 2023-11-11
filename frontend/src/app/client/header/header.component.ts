import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user:any
  constructor(private AuthService: AuthService)
  {  }
  isLoggedIn(){
    this.getUser()
    if(this.user) return true
    else return false;
  }
  getUser(){
    this.user=this.AuthService.getUser()
  }

  ngOnInit(): void {
      this.getUser()
  }
}
