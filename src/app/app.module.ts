import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MessagingService } from "./messaging.service";
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthService } from './auth.service';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserStatusComponent } from './user-status/user-status.component';
import { DashyComponent } from './dashy/dashy.component';
import { GridsterModule } from 'angular2gridster';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashy', component: DashyComponent },
  { path: 'uploads', component: FileUploadsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ForgotPasswordComponent,
    UserStatusComponent,
    DashyComponent,
    FileUploadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    GridsterModule
  ],
  providers: [MessagingService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent]
})
export class AppModule { }
