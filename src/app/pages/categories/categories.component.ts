import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/_services/categories.service';
import { ProductsService } from 'src/app/_services/products.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories = [];
  public products = [];
  public current_category = '';
  constructor(
    private _categories: CategoriesService,
    private _products: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("hi")
    this._categories.getAllCat()
      .subscribe((data) => {
        this.categories = data;
        this.current_category = this.categories[0]
        this.setCurrentCat(this.categories[0])
      })
  }

  setCurrentCat(cat) {
    this.current_category = cat;
    this._products.getAllProd(cat).subscribe((data) => {
      this.products = data;
    })
  }

  gotoProdDetails(prod){
    this.router.navigate(['/product-details', prod.id])
  }

}
