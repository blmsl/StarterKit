import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../_services/auth.service";
import { MatSnackBar } from '@angular/material';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public auth: AuthService) { }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      termAndConditions: ['', [Validators.requiredTrue]]
    });
  }
  submit() {
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent, {
      data: 'Signing you up...'
    });

    this.auth.signUpWithEmailAndPass(this.form.value.email, this.form.value.password)
      .then(value => {
        this.snackBar.open('Welcome  mate!', null, {
          duration: 3000
        });
      })
      .catch(err => {
        snackBarRef.dismiss();


        switch (err['code']) {
          case 'auth/email-already-in-use':
            this.form.controls['email'].setErrors({
              emailAlreadyInUse: true
            });
            break;

          case 'auth/invalid-email':
            this.form.controls['email'].setErrors({
              invalidEmail: true
            });
            break;
        }
      });
  }
}
