import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  activeIndex = 1;  

  onClickItem(index: number) {
    this.activeIndex = index;
  }
}
