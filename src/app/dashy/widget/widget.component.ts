import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { WidgetSettingComponent } from './widget-setting/widget-setting.component'
import { WidgetType } from '../../classes/dashboard';
import { Widget } from '../../classes/dashboard';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  @Input() widget: Widget;
  widgetTypes = WidgetType;
  constructor(public dialogService: DialogService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onRemoveClick() {
    this.onRemove.emit();
  }

  showSettings() {
    let dialogRef = this.dialogService.showDialog(WidgetSettingComponent);
  }
}