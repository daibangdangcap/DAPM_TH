import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  count=0;
  counter(type:string){
    if(type === 'add'){
      this.count++
    }
    else if(type==='minus' && this.count >0){
      this.count--
    }
  }
}
