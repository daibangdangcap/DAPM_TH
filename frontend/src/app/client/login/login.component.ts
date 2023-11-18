import { HttpClient } from '@angular/common/http';
import { Component ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toastService/toast.service';
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
  constructor(private http:HttpClient, private api:API, private router:Router, private AuthService: AuthService, private toastMessage: ToastService){}
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
    if(this.name==''||this.email==''||this.password==''||this.sdt=='')
    {
      this.toastMessage.show('Không được để trống họ tên, email, sdt và mật khẩu!')
    }
    else{
      if(this.sdt.length<10||this.sdt.length>10)
      {
        this.toastMessage.show('Số điện thoại không hợp lệ')
      }
      else{
        this.http.post(this.api.getAPI()+'khachhang/dangKy',{name:this.name, email:this.email, sdt:this.sdt, password:this.password}).subscribe((data:any)=>{
          if(data.error)
          {
            this.toastMessage.show('Email đã tồn tại!')
          }
          else{
            console.log('Success')
            this.router.navigate([`/emailAuth`])
          }
        })
      }
    }
  }

  submitFormLogin(){
    if(this.email==''||this.password=='')
    {
      this.toastMessage.show('Email hoặc mật khẩu không để trống!')
    }
    else{
      this.http.post(this.api.getAPI()+'khachhang/dangNhap',{email:this.email,password:this.password}).subscribe((data:any)=>{
        if(data.invalidPass)
        {
          this.toastMessage.show('Mật khẩu không hợp lệ!')
        }
        else if(data.invalidEmail)
        {
          this.toastMessage.show('Email không tồn tại!')
        }
        else{
          this.router.navigate([`/HomePage`])
          this.AuthService.LogIn(data);
        }
      })
    }
  }
}
