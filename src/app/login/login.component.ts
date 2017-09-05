import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public snackBar: MdSnackBar, public auth: AuthService) { }


  signInWithEmailAndPassword(formData: NgForm) {
    if (formData.valid) {
      let snackBarRef = this.snackBar.openFromComponent(SigningInSnack);

      this.auth.signInWithEmailAndPass(formData.value.email, formData.value.password)
        .then(value => {
          this.snackBar.open('Welcome back mate!', null, {
            duration: 3000
          });
        })
        .catch(err => {
          snackBarRef.dismiss();
        });
    }
  }

}

@Component({
  selector: 'signing-in-snack',
  template: `
   <div fxLayout fxLayoutAlign='center center'>
     <span fxFlex>Signing you in...</span>
     <md-spinner style="height: 2em; width: 2em;"></md-spinner>
   </div>
   `
})
export class SigningInSnack { }
