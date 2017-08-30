import { Component, OnInit  } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import { MessagingService } from "./messaging.service";
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  msgVal: string = '';
  message;

  constructor(
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    public snackBar: MdSnackBar,
    private msgService: MessagingService) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.users = af.list('/users');

    this.user = this.afAuth.authState;
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));

  }

  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }


  logout() {
    this.afAuth.auth.signOut();
  }

  send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }

  delete(message: any) {
    this.af.object('/messages/' + message.$key).remove();
  }

  createUserWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(value => {
          this.snackBar.open('Welcome mate!', null, {
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
          this.snackBar.open('Welcome back mate!', null, {
            duration: 3000
          });
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }
  }


}
