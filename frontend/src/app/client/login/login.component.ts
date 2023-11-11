import { HttpClient } from '@angular/common/http';
import { Component ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[API]
})
export class LoginComponent{
  name: string=''
  email:string=''
  sdt:string=''
  password:string=''

  @ViewChild('container') container: any;
  constructor(private http:HttpClient, private api:API, private router:Router, private AuthService: AuthService){}
  ngAfterViewInit(){
    const overlayBtn = this.container.nativeElement.querySelector('.overlayBtn');
    const overLayCon = this.container.nativeElement.querySelector('.overlayCon')
    overlayBtn.addEventListener('click', () => {
      this.container.nativeElement.classList.toggle('right-panel-active');
      overlayBtn.classList.remove('btnScaled');
      window.requestAnimationFrame(()=>{
        overlayBtn.classList.add('btnScaled')
      })
    });
  }


  submitFormRegis(){
    this.http.post(this.api.getAPI()+'khachhang/dangKy',{name:this.name, email:this.email, sdt:this.sdt, password:this.password}).subscribe((data:any)=>{
      console.log("Success")
      this.router.navigate([`/emailAuth`])
      this.AuthService.setUser(data)
    })
  }

  submitFormLogin(){
    this.http.post(this.api.getAPI()+'khachhang/dangNhap',{email:this.email,password:this.password}).subscribe((data:any)=>{
      this.router.navigate([`/product`])
      this.AuthService.LogIn();
    })
  }
}
