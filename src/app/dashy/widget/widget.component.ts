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
  options: any = {
    series: [{
      type: 'column',
      name: 'Jane',
      data: [3, 2, 1, 3, 4]
    }, {
      type: 'column',
      name: 'John',
      data: [2, 3, 5, 7, 6]
    }, {
      type: 'column',
      name: 'Joe',
      data: [4, 3, 3, 9, 0]
    }, {
      type: 'spline',
      name: 'Average',
      data: [3, 2.67, 3, 6.33, 3.33]
    }, {
      type: 'pie',
      name: 'Total consumption',
      data: [{
        name: 'Jane',
        y: 13
      }, {
        name: 'John',
        y: 23
      }, {
        name: 'Joe',
        y: 19
      }],
      center: [100, 80],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
  };
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
