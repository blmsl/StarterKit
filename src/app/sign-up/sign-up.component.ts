import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { MdSnackBar } from '@angular/material';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(public snackBar: MdSnackBar, public auth: AuthService) { }

  createUserWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent, {
        data: 'Signing you up...'
      });

      this.auth.signUpWithEmailAndPass(formData.value.email, formData.value.password)
        .then(value => {
          this.snackBar.open('Welcome  mate!', null, {
            duration: 3000
          });
        })
        .catch(err => {
          snackBarRef.dismiss();
        });
    }
  }

}
