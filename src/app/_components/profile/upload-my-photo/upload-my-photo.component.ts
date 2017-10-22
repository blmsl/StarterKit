import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../_services/window-ref.service';
import { Upload } from '../../../_classes/upload';

@Component({
  selector: 'app-upload-my-photo',
  templateUrl: './upload-my-photo.component.html',
  styleUrls: ['./upload-my-photo.component.css']
})
export class UploadMyPhotoComponent implements OnInit {
  selectedFile: Upload;

  constructor(public winRef: WindowRefService) { }

  ngOnInit() {
  }

}
