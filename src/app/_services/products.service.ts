import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProd(catName) {
    return this.http.get<any>('https://fakestoreapi.com/products/category/' + catName );
  }

  getProdDetail(id){
    return this.http.get<any>('https://fakestoreapi.com/products/' + id );
  }
}
