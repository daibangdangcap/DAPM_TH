import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3800/sanpham'; 
  constructor(private http: HttpClient) {}
  searchProducts(tenSP: string): Observable<any> {
    const url = `${this.apiUrl}/findSP/${tenSP}`;
    return this.http.get(url);
  }
}
