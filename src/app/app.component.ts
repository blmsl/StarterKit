import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from "./services/auth.service";
import { MatDialog } from '@angular/material';
import { ObservableMedia } from "@angular/flex-layout";
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  users: FirebaseListObservable<any[]>;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public af: AngularFireDatabase,
    public snackBar: MatSnackBar,
    public auth: AuthService,
    public dialog: MatDialog,
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
