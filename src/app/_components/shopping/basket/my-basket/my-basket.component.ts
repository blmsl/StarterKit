import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../../_services/window-ref.service';
import { EcommerceService } from '../../../../_services/ecommerce.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {
  displayedColumns = ['images', 'name', 'description', 'quantity', 'price', 'controls'];

  myBasketDataSource;
  constructor(public winRef: WindowRefService, public ecom: EcommerceService) {
    this.myBasketDataSource = new MyBasketDataSource(this.ecom);
  }

  ngOnInit() {
  }

  removeFromBasket(product: any) {
    this.ecom.removeFromBasket(product);
  }

}


export class MyBasketDataSource extends DataSource<any> {
  constructor(public ecom: EcommerceService) {
    super();
  }
  connect(): Observable<any[]> {
    return this.ecom.baskets.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  disconnect() { }
}
