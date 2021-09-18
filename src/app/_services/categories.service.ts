import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
  ) { }


getAllCat() {
  return this.http.get<any>('https://fakestoreapi.com/products/categories');
}
}