import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  showDialog(component) {
    return this.dialog.open(component);
  }

}
