import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../../_services/window-ref.service';
import { EcommerceService } from '../../../../_services/ecommerce.service';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {
  constructor(public winRef: WindowRefService, public ecom: EcommerceService) {
  }

  ngOnInit() {
  }

}
