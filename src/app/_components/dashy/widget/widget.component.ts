import { Component, Output, Input, EventEmitter, DoCheck } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from '../../../_services/dialog.service';
import { WidgetSettingComponent } from './widget-setting/widget-setting.component'
import { Widget } from '../../../_classes/dashboard';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements DoCheck {
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  @Input() widget: Widget;
  chart: any;
  constructor(public dialogService: DialogService, public sanitizer: DomSanitizer) { }

  onRemoveClick() {
    this.onRemove.emit();
  }

  onEditClick() {
    this.onSelect.emit();
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
      this.chart.redraw();
    }
  }

  setChartType(type: string) {
    if(this.chart)  {
      debugger;
    }
  }
}
