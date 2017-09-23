import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarProgressComponent } from '../snackbar-progress/snackbar-progress.component';

@Injectable()
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  showProgress(message: string) {
    let snackBarRef = this.snackBar.openFromComponent(SnackbarProgressComponent, {
      data: message
    });

    return snackBarRef;
  }

  showMessage(message: string, duration: number = 2000) {
    let snackBarRef = this.snackBar.open(message, '', {
      duration: duration,
    });

    return snackBarRef;
  }

}
