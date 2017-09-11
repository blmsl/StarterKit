export class Dashboard {
  $key: string;
  name: string = "new dashboard";
  widgets: Array<Widget> = [];

  constructor(name: string = "", widgets: Array<Widget> = null) {
    this.name = name;

    if (widgets == null) {
      var widget1 = new Widget();
      widget1.options.url = "https://github.com/MurWade/app-demo";
      widget1.gridSterItemOptions.x = 6;
      widget1.gridSterItemOptions.y = 0;
      widget1.gridSterItemOptions.cols = 2;
      widget1.gridSterItemOptions.rows = 3;

      var widget2 = new Widget(WidgetType.CHART);
      widget2.gridSterItemOptions.x = 4;
      widget2.gridSterItemOptions.y = 0;
      widget2.gridSterItemOptions.cols = 2;
      widget2.gridSterItemOptions.rows = 3;

      var widget3 = new Widget();
      widget3.gridSterItemOptions.x = 0;
      widget3.gridSterItemOptions.y = 3;
      widget3.gridSterItemOptions.cols = 4;
      widget3.gridSterItemOptions.rows = 5;

      var widget4 = new Widget();
      widget4.gridSterItemOptions.x = 0;
      widget4.gridSterItemOptions.y = 0;
      widget4.gridSterItemOptions.cols = 4;
      widget4.gridSterItemOptions.rows = 3;

      var widget5 = new Widget();
      widget5.gridSterItemOptions.x = 4;
      widget5.gridSterItemOptions.y = 3;
      widget5.gridSterItemOptions.cols = 4;
      widget5.gridSterItemOptions.rows = 5;

      this.widgets.push(widget1);
      this.widgets.push(widget2);
      this.widgets.push(widget3);
      this.widgets.push(widget4);
      this.widgets.push(widget5);
    }
  }
}

export class Widget {
  type: WidgetType = WidgetType.URL;
  options: any = {};
  title: string = "Title - demo widget";
  subtitle: string= "Subtitle - demo widget"
  gridSterItemOptions: GridSterItemOptions = new GridSterItemOptions();

  constructor(type: WidgetType = WidgetType.URL) {
    this.type = type;
  }
}

export class GridSterItemOptions {
  x: number;
  y: number;
  cols: number;
  rows: number;
}

export enum WidgetType {
  URL, PDF, TEXT, CHART, TABLE
}
