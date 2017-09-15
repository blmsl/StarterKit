import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "./services/auth.service";
import { MdDialog } from '@angular/material';
import { ObservableMedia } from "@angular/flex-layout";
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  users: FirebaseListObservable<any[]>;

  constructor(
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer,
    public af: AngularFireDatabase,
    public snackBar: MdSnackBar,
    public auth: AuthService,
    public dialog: MdDialog,
    public media: ObservableMedia) {

    this.users = af.list('/users');

    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));

  }

  ngOnInit() {
  }


  logout() {
    this.auth.signOut();
  }

  routeLinkClick() {
    if (!this.media.isActive('gt-xs')) {
      this.sidenav.toggle();
    }
  }


}
