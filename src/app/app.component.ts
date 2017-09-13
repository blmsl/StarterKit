import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { MessagingService } from "./services/messaging.service";
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "./services/auth.service";
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

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


  logout() {
    this.auth.signOut();
  }


}
