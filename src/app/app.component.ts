import { Component, OnInit  } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import { MessagingService } from "./services/messaging.service";
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { AuthService } from "./services/auth.service";
import { MdDialog } from '@angular/material';
import { ForgotPasswordComponent } from './forgot-password.component';

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
    public auth: AuthService,
    public dialog: MdDialog) {

    this.users = af.list('/users');

    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));

  }

  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }


  showPasswordResetDialog(): void {
    let dialogRef = this.dialog.open(ForgotPasswordComponent);

    dialogRef.afterClosed().subscribe(email => {
      this.auth.sendPasswordResetEmail(email)
        .then(result => {
          this.snackBar.open('We have sent an email to ' + email + ', you should get it shortly.', null, {
            duration: 3000
          });
        })
    });
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
