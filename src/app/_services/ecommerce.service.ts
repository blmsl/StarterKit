import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from "../_services/auth.service";
import * as firebase from 'firebase';

import { MatSnackBar } from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection} from 'angularfire2/firestore';


@Injectable()
export class EcommerceService {
  private products: AngularFirestoreCollection<any>;

  constructor(
    private af: AngularFireDatabase,
    private authService: AuthService,
    private afs: AngularFirestore,
    public auth: AuthService) {
    this.products = this.afs.collection('products')
  }

  createProduct(product: any) {

    product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    product.creatorId = this.authService._user.uid;
    return this.products.add(product);
  }
}
