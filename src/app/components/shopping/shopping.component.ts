import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EcommerceService } from "../../services/ecommerce.service";
import { SellComponent } from '../-shared/sell/sell.component';

import { SnackBarService } from '../../services/snack-bar-service.service';
import { DialogService } from '../../services/dialog.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import * as _ from 'lodash';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  items = new BehaviorSubject([]);
  batch = 30;
  lastKey = '';
  finished = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: SnackBarService,
    private dialog: DialogService,
    public ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.getItems();
  }

  private getItems(key?) {
    if (this.finished) {
      return;
    }

    this.ecommerceService
      .getItems(this.batch + 1, this.lastKey)
      .do(items => {

        /// set the lastKey in preparation for next query
        this.lastKey = _.last(items)['$key']

        const newItems = _.slice(items, 0, this.batch)
        /// Get current movies in BehaviorSubject
        const currentItems = this.items.getValue()
        /// If data is identical, stop making queries
        if (this.lastKey == _.last(newItems)['$key']) {
          this.finished = true
        }
        /// Concatenate new movies to current movies
        this.items.next(_.concat(currentItems, newItems))
      })
      .take(1)
      .subscribe()
  }

  showSellDialog() {
    let dialogRef = this.dialog.showDialog(SellComponent);
  }

}
