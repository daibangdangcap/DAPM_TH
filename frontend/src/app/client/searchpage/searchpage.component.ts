import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchResults: any[];

  constructor(private route: ActivatedRoute, private proService : SearchService , private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const tenSP = params['tenSP'];
      if (tenSP) {
        this.proService.searchProducts(tenSP).subscribe(
          (data) => {
            this.searchResults=data.data;
            console.log(this.searchResults)
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
}
changeToDetailPage(idSanPham){
  this.router.navigate([`/Product-Detail`,idSanPham])
}
}
