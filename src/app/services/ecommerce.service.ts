import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AuthService } from "../services/auth.service";
import * as firebase from 'firebase';

@Injectable()
export class EcommerceService {
  private basePath: string = '/list-items';

  constructor(private af: AngularFireDatabase, private authService: AuthService) { }


  createItem(item: any) {
    // add user and item
    item.createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    item.creatorId = this.authService._user.uid;

    return firebase.database().ref().child(this.basePath).push(item);
  }

  getItems(batch, lastKey?) {
    let query = {
      orderByKey: true,
      limitToFirst: batch,
    }
    if (lastKey) query['startAt'] = lastKey
    return this.af.list(this.basePath, {
      query
    })
  }
}
