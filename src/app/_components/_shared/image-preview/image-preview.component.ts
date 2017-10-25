import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  @Input() images: Array<string>;
  private currentThumbnail: number = 0;

  constructor() { }

  ngOnInit() {
  }

  thumbnailNext($event) {
    this.currentThumbnail += 1;

    if (this.currentThumbnail >= this.images.length) {
      this.currentThumbnail = 0
    }

    $event.stopPropagation();
    return false;
  }

  thumbnailPrev($event) {
    this.currentThumbnail -= 1;

    if (this.currentThumbnail < 0) {
      this.currentThumbnail = this.images.length - 1;
    }

    $event.stopPropagation();
    return false;
  }

}
