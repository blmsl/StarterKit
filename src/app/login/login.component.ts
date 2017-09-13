import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MdSnackBar, public auth: AuthService, public dialog: MdDialog) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  submit() {
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent,
      { data: 'Signing you in...' });

    this.auth.signInWithEmailAndPass(this.form.value.email, this.form.value.password)
      .then(value => {
        this.snackBar.open('Welcome back mate!', null, {
          duration: 3000
        });
      })
      .catch(err => {
        snackBarRef.dismiss();

        switch (err['code']) {
          case 'auth/user-not-found':
            this.form.controls['email'].setErrors({
              userNotFound: true
            });
            break;

          case 'auth/wrong-password':
            this.form.controls['password'].setErrors({
              wrongPassword: true
            });
            break;

          default:
        }
      });
  }

  showPasswordResetDialog(): void {
    let dialogRef = this.dialog.open(ForgotPasswordComponent);
    dialogRef.afterClosed().subscribe(email => {
      if (email) {
        this.auth.sendPasswordResetEmail(email)
          .then(result => {
            this.snackBar.open('We have sent an email to ' + email + ', you should get it shortly.', null, {
              duration: 3000
            });
          })
      }
    });
  }

}
