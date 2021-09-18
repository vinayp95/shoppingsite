import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id = '';
  public product = {
    title : '',
    price: '',
    description: '',
    image: ''
  }
  constructor(
    private route: ActivatedRoute,
    private _products: ProductsService,
    private LocalStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this._products.getProdDetail(this.id)
      .subscribe((data) => {
        this.product = data;
      })
  }

  addToCart(){
    let currentItemCount = this.LocalStorage.retrieve("itemsCount");
    this.LocalStorage.store('itemsCount', currentItemCount + 1);
  }

}
