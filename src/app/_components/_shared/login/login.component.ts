import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AuthService } from "../../../_services/auth.service";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  submit() {
    let snackBarRefff = this.snackBar.openFromComponent(SnackbarProgressComponent,
      { data: 'Signing you in...' });
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent,
      { data: 'Signing you in...' });

    this.auth.signInWithEmailAndPass(this.form.value.email, this.form.value.password)
      .then(value => {
        this.snackBar.open('Welcome back mate!', null, {
          duration: 3000
        });
      })
      .catch(err => {

        switch (err['code']) {
          case 'auth/user-not-found':
            this.form.controls['email'].setErrors({
              userNotFound: true
            });
            break;

          case 'auth/invalid-email':
            this.form.controls['email'].setErrors({
              invalidEmail: true
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
    this.dialog.open(ForgotPasswordComponent);
  }

}
