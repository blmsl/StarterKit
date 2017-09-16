import { Component, Output, Input, EventEmitter, DoCheck } from '@angular/core';
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
export class WidgetComponent implements DoCheck {
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  @Input() widget: Widget;
  widgetTypes = WidgetType;
  chart: any;
  constructor(public dialogService: DialogService, public sanitizer: DomSanitizer) { }

  onRemoveClick() {
    this.onRemove.emit();
  }
  ngDoCheck() {
    this.resizeChart();
  }

  showSettings() {
    let dialogRef = this.dialogService.showDialog(WidgetSettingComponent);
  }
  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }

  resizeChart() {
    if (this.chart) {
      this.chart.reflow();
    }
  }
}
