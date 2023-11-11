import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API } from '../services/API.service';

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt-detail.component.css'],
  providers:[API]
})
export class ReceiptDetailComponent implements OnInit{
  constructor(private http:HttpClient, private activeroute:ActivatedRoute, private api:API){}
  idOrder:string=''
  listCTDH:any
  getOrderDetail(){
    this.http.post(this.api.getAPI()+'donHang/CTDH',{idOrder:this.idOrder}).subscribe((data:any)=>{
      console.log(data)
      this.listCTDH=data
    })
  }

  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      // Access the parameters from the URL
      this.idOrder = params['idOrder'];
      console.log(this.idOrder)
    });
    this.getOrderDetail()
  }
}
