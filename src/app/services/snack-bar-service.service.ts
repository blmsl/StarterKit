import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Injectable()
export class SnackBarServiceService {

  constructor(public snackBar: MdSnackBar) { }

  showProgress(message: string) {
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent, {
      data: message
    });

    return snackBarRef;
  }

}
