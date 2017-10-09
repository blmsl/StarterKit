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
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  _user: firebase.User;
  userId: string;
  mouseEvents: Subscription
  timer: Subscription;

  constructor(public afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
    this.user = this.afAuth.authState;
    this.afAuth.authState
      .do(user => {
        if (user) {
          this._user = user;
          this.userId = user.uid;
          this.updateOnConnect()
          this.updateOnIdle()
        }
      }).subscribe();
  }

  private updateOnIdle() {
    this.mouseEvents = Observable
      .fromEvent(document, 'mousemove')
      .throttleTime(1000)
      .do(() => {
        this.updateStatus('online')
        this.resetTimer()
      })
      .subscribe()
  }
  private resetTimer() {
    if (this.timer) this.timer.unsubscribe()
    this.timer = Observable.timer(60000)
      .do(() => {
        this.updateStatus('away')
      })
      .subscribe()
  }

  private updateStatus(status: string) {

    if (!this.userId) return
    this.db.object(`users/` + this.userId).update({ status: status })
  }

  private updateOnConnect() {

    // Create a reference to the special ".info/connected" path in
    // Realtime Database. This path returns `true` when connected
    // and `false` when disconnected.
    firebase.database().ref(".info/connected").on("value", function(snapshot) {
      // If we're not currently connected, don't do anything.
      if (snapshot.val() == false) {
        return;
      };

      // If we are currently connected, then use the 'onDisconnect()'
      // method to add a set which will only trigger once this
      // client has disconnected by closing the app,
      // losing internet, or any other means.
      this.updateOnDisconnect();
      // The promise returned from .onDisconnect().set() will
      // resolve as soon as the server acknowledges the onDisconnect()
      // request, NOT once we've actually disconnected:
      // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

      // We can now safely set ourselves as "online" knowing that the
      // server will mark us as offline once we lose connection.
      this.updateStatus('online')
    });
  }

  private updateOnDisconnect() {
    firebase.database().ref().child('users/' + this.userId)
      .onDisconnect()
      .update({ status: 'offline' })
  }
  signUpWithEmailAndPass(email: string, pass: string) {
    let promise = this.afAuth.auth.createUserWithEmailAndPassword(email, pass)


    promise.then( (result) => {
      // create new user object
      
    })
    .catch((err) => {
      debugger;
    })
    return promise; ;
  }

  signInWithEmailAndPass(email: string, pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  signOut(): void {
    this.updateStatus('offline');
    this.mouseEvents.unsubscribe()
    this.timer.unsubscribe()
    this.afAuth.auth.signOut();
  }

  sendPasswordResetEmail(email: string) {
    return firebase.auth().sendPasswordResetEmail(email)
  }

}
