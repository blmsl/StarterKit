import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  @Output() addToBasket = new EventEmitter();

  currentThumbnail: number = 0;
  constructor() {
  }

  ngOnInit() {
  }

}
