import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
	images1 = ['../../../assets/images/bannerA1.png','../../../assets/images/bannerB1.png','../../../assets/images/OIP (2).jfif'];
  images2=['../../../assets/images/bannerB1.png','../../../assets/images/bannerA1.png']
}
