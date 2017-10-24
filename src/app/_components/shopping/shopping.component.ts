import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EcommerceService } from "../../_services/ecommerce.service";
import { SnackBarService } from '../../_services/snack-bar-service.service';
import { DialogService } from '../../_services/dialog.service';
import { SellComponent } from './sell/sell.component';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import * as _ from 'lodash';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';



@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  items: Observable<any[]>;
  constructor(
    private fb: FormBuilder,
    private snackBar: SnackBarService,
    private dialog: DialogService,
    public ecommerceService: EcommerceService,
    afs: AngularFirestore) {
    this.items = afs.collection('products').valueChanges();

  }

  ngOnInit() {
  }

  showSellDialog() {
    let dialogRef = this.dialog.showDialog(SellComponent);
  }

  addToBasket(product: any) {
    this.ecommerceService.addToBasket(product);
  }
}
