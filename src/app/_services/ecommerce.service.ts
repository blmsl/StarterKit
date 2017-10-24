import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from "../_services/auth.service";
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SnackBarService } from './snack-bar-service.service';


@Injectable()
export class EcommerceService {
  public products: AngularFirestoreCollection<any>;
  public baskets: AngularFirestoreCollection<any[]>;

  private user: any;
  constructor(
    private af: AngularFireDatabase,
    private authService: AuthService,
    private afs: AngularFirestore,
    public auth: AuthService,
    public snackBar: SnackBarService) {
    this.products = this.afs.collection('products')
    this.baskets = this.afs.collection('baskets')

    this.auth.user.subscribe(user => {
      this.user = user;
      this.baskets = this.afs.collection('baskets', ref => ref.where('email', '==', `${user.email}`))
    })
  }

  createProduct(product: any) {

    product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    product.creatorId = this.authService._user.uid;
    return this.products.add(product);
  }

  addToBasket(product: any) {

    if (this.user) {
      product.email = this.user.email;
      this.afs.collection('baskets').add(product)
        .then(result => {
          this.snackBar.showMessage('Your item has been added to your basket');
        });
    }
  }

  removeFromBasket(product: any) {

  }
}
