import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/services/API.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers:[API]
})
export class UserPageComponent implements OnInit{
  constructor(private http:HttpClient, private api: API, private authService:AuthService){}
  user:any
  getUserInform(){
    this.user=this.authService.getUser()
    console.log(this.user)
  }
  ngOnInit(): void {
      this.getUserInform()
  }
}
