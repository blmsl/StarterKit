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
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  users: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
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

    // this peace of code changes the title of the page
    // if you want to know why the code is what it is
    // then have a look at https://toddmotto.com/dynamic-page-titles-angular-2-router-events
    
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
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
