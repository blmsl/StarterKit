export class Dashboard {
  $key: string;
  name: string = "new dashboard";
  widgets: Array<Widget> = [];

  constructor(name: string = "", widgets: Array<Widget> = null) {
    this.name = name;

    if (widgets == null) {
      var widget1 = new Widget();
      widget1.title = "Mixed chart";
      widget1.subtitle = "Some random subtitle";
      widget1.gridSterItemOptions.x = 6;
      widget1.gridSterItemOptions.y = 0;
      widget1.gridSterItemOptions.cols = 2;
      widget1.gridSterItemOptions.rows = 3;
      widget1.chartOptions = {
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
      }

      var widget2 = new Widget();
      widget2.title = "Area chart";
      widget2.subtitle = "Nuclear stockpiles";
      widget2.gridSterItemOptions.x = 4;
      widget2.gridSterItemOptions.y = 0;
      widget2.gridSterItemOptions.cols = 2;
      widget2.gridSterItemOptions.rows = 3;
      widget2.chartOptions = {
        chart: {
          type: 'area'
        },
        series: [{
          name: 'USA',
          data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
          name: 'USSR/Russia',
          data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
      }

      var widget3 = new Widget();
      widget3.title = "Pie chart";
      widget3.subtitle = "Browser market shares";
      widget3.gridSterItemOptions.x = 0;
      widget3.gridSterItemOptions.y = 3;
      widget3.gridSterItemOptions.cols = 4;
      widget3.gridSterItemOptions.rows = 5;
      widget3.chartOptions = {
        chart: {
          type: 'pie'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
          }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
          }, {
            name: 'Firefox',
            y: 10.38
          }, {
            name: 'Safari',
            y: 4.77
          }, {
            name: 'Opera',
            y: 0.91
          }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
          }]
        }]
      }

      var widget4 = new Widget();
      widget4.title = "Basic line chart";
      widget4.subtitle = "Solar Employment";
      widget4.gridSterItemOptions.x = 0;
      widget4.gridSterItemOptions.y = 0;
      widget4.gridSterItemOptions.cols = 4;
      widget4.gridSterItemOptions.rows = 3;
      widget4.chartOptions = {
        series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]

      }

      var widget5 = new Widget();
      widget5.title = "Buble chart";
      widget5.title = "Subtitle Buble chart";
      widget5.gridSterItemOptions.x = 4;
      widget5.gridSterItemOptions.y = 3;
      widget5.gridSterItemOptions.cols = 4;
      widget5.gridSterItemOptions.rows = 5;
      widget5.chartOptions = {
        chart: {
          type: 'bubble',
        },

        series: [{
          data: [
            [9, 81, 63],
            [98, 5, 89],
            [51, 50, 73],
            [41, 22, 14],
            [58, 24, 20],
            [78, 37, 34],
            [55, 56, 53],
            [18, 45, 70],
            [42, 44, 28],
            [3, 52, 59],
            [31, 18, 97],
            [79, 91, 63],
            [93, 23, 23],
            [44, 83, 22]
          ]
        }, {
          data: [
            [42, 38, 20],
            [6, 18, 1],
            [1, 93, 55],
            [57, 2, 90],
            [80, 76, 22],
            [11, 74, 96],
            [88, 56, 10],
            [30, 47, 49],
            [57, 62, 98],
            [4, 16, 16],
            [46, 10, 11],
            [22, 87, 89],
            [57, 91, 82],
            [45, 15, 98]
          ]
        }]

      }

      this.widgets.push(widget1);
      this.widgets.push(widget2);
      this.widgets.push(widget3);
      this.widgets.push(widget4);
      this.widgets.push(widget5);
    }
  }
}

export class Widget {
  private _chartOptions: any = {};
  private _title: string = "Title - demo widget";
  private _subtitle: string = "Subtitle - demo widget";

  gridSterItemOptions: GridSterItemOptions = new GridSterItemOptions();

  constructor() {
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(subtitle: string) {
    this._subtitle = subtitle;
  }

  get chartOptions(): any {
    return this._chartOptions;
  }

  set chartOptions(options: any) {
    this._chartOptions = options;
  }
}

export class GridSterItemOptions {
  x: number;
  y: number;
  cols: number;
  rows: number;
}
