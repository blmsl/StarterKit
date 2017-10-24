import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../../_services/window-ref.service';
import { EcommerceService } from '../../../../_services/ecommerce.service';

@Component({
  selector: 'app-my-busket',
  templateUrl: './my-busket.component.html',
  styleUrls: ['./my-busket.component.css']
})
export class MyBusketComponent implements OnInit {
  constructor(public winRef: WindowRefService, public ecom: EcommerceService) {
  }

  ngOnInit() {
  }

}
