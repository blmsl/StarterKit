import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../_components/_shared/_dialogs/confirm/confirm.component';
import { PromptComponent } from '../_components/_shared/_dialogs/prompt/prompt.component';
import { Validators } from '@angular/forms';
@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) { }

  showDialog(component, data: any = {}) {
    return this.dialog.open(component, data);
  }

  showConfirmDialog(message: string) {
    return this.dialog.open(ConfirmComponent, {
      data: {
        message: message
      }
    });

  }

  showPromptDialog(message: string, type: string = 'text', validators: Array<Validators> = [Validators.required]) {
    return this.dialog.open(PromptComponent, {
      data: {
        message: message,
        type: type,
        validators: validators
      }
    });
  }

}
