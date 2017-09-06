import { Component, OnInit, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar-progress',
  templateUrl: './snackbar-progress.component.html',
  styleUrls: ['./snackbar-progress.component.css']
})
export class SnackbarProgressComponent implements OnInit {

  constructor( @Inject(MD_SNACK_BAR_DATA) public message: any) {
  }

  ngOnInit() {
  }

}
