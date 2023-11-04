import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  activeIndex = 0;  
  selectedImage: string = 'assets/images/client/homepage/andoduong.png';
  imageNumber: number = 1;
  // images: string[] = ['assets/images/client/homepage/andoduong.png', 'assets/images/client/homepage/thaibinhduong.png', 'assets/images/client/homepage/bacbangduong.png', 'assets/images/client/homepage/namdaiduong.png'];
  constructor() {}
  ngOnInit(): void {
  }
  onClickItem(index: number) {
    this.activeIndex = index;
  }

  showImage(imageNumber: number) {
    switch (imageNumber) {
      case 1:
        this.selectedImage  = 'assets/images/client/homepage/andoduong.png';
        break;
      case 2:
        this.selectedImage = 'assets/images/client/homepage/thaibinhduong.png';
        break;
      case 3:
        this.selectedImage = 'assets/images/client/homepage/bacbangduong.png';
        break;
      case 4:
        this.selectedImage = 'assets/images/client/homepage/namdaiduong.png';
        break;
    }
  }
}
