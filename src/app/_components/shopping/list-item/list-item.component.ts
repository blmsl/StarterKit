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

  thumbnailNext($event) {
    this.currentThumbnail += 1;

    if (this.currentThumbnail >= this.item.images.length) {
      this.currentThumbnail = 0
    }

    $event.stopPropagation();
    return false;
  }

  thumbnailPrev($event) {
    this.currentThumbnail -= 1;

    if (this.currentThumbnail < 0) {
      this.currentThumbnail = this.item.images.length - 1;
    }

    $event.stopPropagation();
    return false;
  }

}
