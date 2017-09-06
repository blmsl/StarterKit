import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-dashboard-dialog',
  templateUrl: './new-dashboard-dialog.component.html',
  styleUrls: ['./new-dashboard-dialog.component.css']
})
export class NewDashboardDialogComponent implements OnInit {
  public newDashboardForm = this.fb.group({
    name: ["", Validators.required]
  });
  constructor(public fb: FormBuilder,
    public dialogRef: MdDialogRef<NewDashboardDialogComponent>,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  submitForm() {
    // show snabar progress
    // create dashboard
    // return dashboard

  }
}
