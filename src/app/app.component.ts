import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public snackBar: MdSnackBar) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }

  createUserWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(value => {
          this.snackBar.open('Welcome mate!', null,{
            duration: 3000
          });
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }
  }

  signInWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth
        .auth
        .signInWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(value => {
          this.snackBar.open('Welcome back mate!', null,{
            duration: 3000
          });
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }
  }


}
