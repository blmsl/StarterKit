import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { SnackBarService } from '../../_services/snack-bar-service.service';
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  providers: [FormBuilder]
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(public auth: AuthService, public snackBarService: SnackBarService, public fb: FormBuilder,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  submit() {
    let snackBarRef = this.snackBarService.showProgress('Hold on brah...')
    let email = this.form.value.email;
    this.auth.sendPasswordResetEmail(email)
      .then(result => {
        this.snackBarService.showMessage('We have sent an email to ' + email + ', you should get it shortly.', 3000);
        this.dialogRef.close()
      })
      .catch(err => {
        snackBarRef.dismiss();

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
        }
      })

  }

}
