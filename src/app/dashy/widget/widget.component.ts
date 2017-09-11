import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { WidgetSettingComponent } from './widget-setting/widget-setting.component'
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

  onRemoveClick() {
    this.onRemove.emit();
  }

  showSettings() {
    let dialogRef = this.dialogService.showDialog(WidgetSettingComponent);
  }
}
