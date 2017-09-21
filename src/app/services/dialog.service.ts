import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { PromptComponent } from '../dialogs/prompt/prompt.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  showDialog(component) {
    return this.dialog.open(component);
  }

  showConfirmDialog(message: string) {
    return this.dialog.open(ConfirmComponent, {
      data: {
        message: message
      }
    });

  }

  showPromptDialog(message: string, type: string = 'text') {
    return this.dialog.open(PromptComponent, {
      data: {
        message: message,
        type: type
      }
    });

  }

}
