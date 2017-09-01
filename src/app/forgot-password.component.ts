import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  providers: [FormBuilder]
})
export class ForgotPasswordComponent implements OnInit {
  public retrievePasswordForm = this.fb.group({
    email: ["", Validators.required]
  });
  constructor(public fb: FormBuilder,
    public dialogRef: MdDialogRef<ForgotPasswordComponent>) { }

  ngOnInit() {
  }

}
