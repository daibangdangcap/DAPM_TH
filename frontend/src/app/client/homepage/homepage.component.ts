import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showNavigationArrows = true;
	showNavigationIndicators = true;
	images1 = ['../../../assets/images/bannerA1.png','../../../assets/images/OIP (1).jfif','../../../assets/images/OIP (2).jfif'];
  images2=['../../../assets/images/bannerB1.png']
	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
