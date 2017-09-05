import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';


import { SigningUpSnack } from './sign-up/sign-up.component';
import { MessagingService } from "./services/messaging.service";
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';

import { UserStatusComponent } from './user-status/user-status.component';
import { DashyComponent } from './dashy/dashy.component';
import { GridsterModule } from 'angular2gridster';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { UtilsService } from './services/utils.service';
import { LoginComponent, SigningInSnack } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashy', component: DashyComponent },
  { path: 'uploads', component: FilesUploadComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ForgotPasswordComponent,
    UserStatusComponent,
    DashyComponent,
    FilesUploadComponent,
    FileSizePipe,
    SigningInSnack,
    SigningUpSnack,
    LoginComponent,
    SignUpComponent
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
  providers: [MessagingService, AuthService, UploadService, UtilsService],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgotPasswordComponent,
    SigningInSnack,
    SigningUpSnack]
})
export class AppModule { }
