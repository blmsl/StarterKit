import { Component, OnInit  } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import { MessagingService } from "./messaging.service";
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  message;

  constructor(
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer,
    public af: AngularFireDatabase,
    public snackBar: MdSnackBar,
    private msgService: MessagingService,
    private auth: AuthService) {

    this.users = af.list('/users');

    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));

  }

  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }


  logout() {
    this.auth.signOut();
  }

  createUserWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.auth.signUpWithEmailAndPass(formData.value.email, formData.value.password)
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

      this.auth.signInWithEmailAndPass(formData.value.email, formData.value.password)
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
