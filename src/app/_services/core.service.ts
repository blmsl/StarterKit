import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class CoreService {
  isElectron: boolean = false;
  constructor(winRef: WindowRefService) {
    this.isElectron = winRef.nativeWindow && winRef.nativeWindow.process && winRef.nativeWindow.process.type;

  }

}
