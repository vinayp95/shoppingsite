import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public itemsCount = 0;
  constructor(
    private LocalStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {

    if(this.LocalStorage.retrieve("itemsCount"))
      this.itemsCount = this.LocalStorage.retrieve("itemsCount");

    this.LocalStorage.observe('itemsCount')
        .subscribe((newValue) => {
          console.log(newValue);
          this.itemsCount = newValue;
        })

  }

  emptyCart(){
    this.LocalStorage.store('itemsCount', 0);
  }

}
