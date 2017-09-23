import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Dashboard } from '../../classes/dashboard';
@Component({
  selector: 'app-new-dashboard-dialog',
  templateUrl: './new-dashboard-dialog.component.html',
  styleUrls: ['./new-dashboard-dialog.component.css']
})
export class NewDashboardDialogComponent implements OnInit {
  private _newDashboard: Dashboard = new Dashboard();
  constructor() { }

  ngOnInit() {
  }

  get newDashboard(): Dashboard {
    return this._newDashboard;
  }

  set newDashboard(newDashboard: Dashboard) {
    this._newDashboard = newDashboard;
  }

  submitForm() {
    // show snabar progress
    // create dashboard
    // return dashboard

  }
}
