export class Dashboard {
  $key: string;
  name: string = "new dashboard";
  widgets: Array<any> = [];

  constructor(name: string = "") {
    this.name = name;
  }
}
