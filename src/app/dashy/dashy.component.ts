import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashy',
  templateUrl: './dashy.component.html',
  styleUrls: ['./dashy.component.css']
})
export class DashyComponent implements OnInit {
  widgets: Array<any> = [{}, {}, {}];
  gridsterOptions = {
    lanes: 5, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true,
    resizable: true,
    responsiveView: true,
    responsiveDebounce: 500
  };
  constructor() { }

  ngOnInit() {
  }

}
