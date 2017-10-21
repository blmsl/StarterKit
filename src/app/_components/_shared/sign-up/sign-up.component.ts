import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from "../../../_services/auth.service";
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public auth: AuthService,
    private afs: AngularFirestore) { }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      termAndConditions: ['', [Validators.requiredTrue]]
    });
    }

// Creates a user object in firestore
// this is called after a user successfully signs up
// before the email is verified
  private createUser(user, verified: boolean = false) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)

    return userRef.set({
      email: user.email,
      joined: firebase.firestore.FieldValue.serverTimestamp(),
      verified: verified
    });
  }

  submit() {
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent, {
      data: 'Signing you up...'
    });

    this.auth.signUpWithEmailAndPass(this.form.value.email, this.form.value.password)
      .then(result => {
        this.createUser(result, false);

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
