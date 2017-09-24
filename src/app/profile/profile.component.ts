import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar-service.service';
import { DialogService } from '../services/dialog.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(public auth: AuthService,
    public snackBar: SnackBarService,
    public dialogService: DialogService,
    private fb: FormBuilder) { }

  ngOnInit() {
    let passwordValidators = [Validators.required, Validators.minLength(6), Validators.maxLength(12)];
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', passwordValidators],
      newPassword: ['', passwordValidators]
    });
  }

  changePassword() {
    let snackBarRef = this.snackBar.showProgress("Changing your password")

    const credentials = firebase.auth.EmailAuthProvider.credential(this.auth._user.email, this.changePasswordForm.value.currentPassword);
    this.auth._user.reauthenticateWithCredential(credentials)
      .then(() => {

        this.auth._user.updatePassword(this.changePasswordForm.value.newPassword)
          .then(result => {
            this.snackBar.showMessage("Your password has been changed!");
          })
          .catch(err => {

          });
      })
      .catch((err) => {
        snackBarRef.dismiss();

        switch (err['code']) {
          case 'auth/wrong-password':
            this.changePasswordForm.controls['currentPassword'].setErrors({
              wrongPassword: true
            });
            break;

          default:
            this.snackBar.showMessage("Something went wrong");
        }
      })
  }

  deleteAccountClick() {
    let successMsg = "Your account has been deleted mate. Will love to have you back";

    this.dialogService.showConfirmDialog("Are you sure you want to delete your account")
      .afterClosed().subscribe(result => {

        var r = result;
        if (r == true) {
          let snackBarRef = this.snackBar.showProgress("Deleteing your account...")
          this.auth._user.delete()
            .then(() => {
              this.snackBar.showMessage(successMsg);
            })
            .catch(err => {
              snackBarRef.dismiss();
              switch (err['code']) {
                case 'auth/requires-recent-login':

                  this.dialogService.showPromptDialog(
                    "Please enter your password",
                    "password",
                    [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
                  )
                    .afterClosed().subscribe(result => {
                      var password = result;
                      const credentials = firebase.auth.EmailAuthProvider.credential(this.auth._user.email, password);
                      this.auth._user.reauthenticateWithCredential(credentials)
                        .then(() => {

                          this.auth._user.delete()
                            .then(() => {
                              this.snackBar.showMessage(successMsg);
                            })
                            .catch(err => {
                              this.snackBar.showMessage("Something went wrong, please go f ur self");
                            })

                        })
                        .catch((err) => {
                          switch (err['code']) {
                            case 'auth/wrong-password':
                              this.snackBar.showMessage("You entered the wrong password");
                              break;

                            default:
                              this.snackBar.showMessage("Something went wrong");
                          }
                        })

                    });
                  break;

                default:
                  this.snackBar.showMessage("Something went wrong");

              }
            })
        }
      })
  }
}
