import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  activeIndex = 0;  

  onClickItem(index: number) {
    this.activeIndex = index;
  }
}
