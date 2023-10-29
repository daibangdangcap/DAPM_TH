import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
	images1 = ['../../../assets/images/client/homepage/bannerA1.png','../../../assets/images/client/homepage/bannerB1.png','../../../assets/images/client/homepage/OIP (2).jfif'];
}
