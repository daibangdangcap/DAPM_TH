import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchResults: any[];

  constructor(private route: ActivatedRoute, private proService : SearchService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const tenSP = params['tenSP'];
      if (tenSP) {
        this.proService.searchProducts(tenSP).subscribe(
          (data) => {
            this.searchResults=data.data;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
}
}
