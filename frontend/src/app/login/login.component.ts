import { Component ,ViewChild,ElementRef} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('container') container: any;
  constructor(){}
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
}
