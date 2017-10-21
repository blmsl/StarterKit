import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthService {

  user: Observable<any>;
  _user: firebase.User;
  userId: string;

  constructor(public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private db: AngularFireDatabase) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this
            .afs
            .doc<any>(`users/${user.uid}`)
            .valueChanges();
        }
        else {
          return Observable.of(null);
        }

      })
    this.afAuth.authState
      .do(user => {
        if (user) {
          this._user = user;
          this.userId = user.uid;
        }
      }).subscribe();
  }


  signUpWithEmailAndPass(email: string, pass: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  }

  signInAnonymously() {
    return firebase.auth().signInAnonymously();
  }

  signInWithEmailAndPass(email: string, pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  sendPasswordResetEmail(email: string) {
    return firebase.auth().sendPasswordResetEmail(email)
  }

}
