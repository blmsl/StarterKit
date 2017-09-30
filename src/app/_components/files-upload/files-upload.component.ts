import { Component } from '@angular/core';
import { Upload } from '../../_classes/upload'
import { UploadService } from '../../_services/upload.service';

import * as _ from "lodash";

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent {
  uploads: Array<Upload> = [];
  constructor(private upSvc: UploadService) {

  }

  removeUpload(index: number) {
    this.uploads[index].cancelUpload();
    this.uploads.splice(index, 1);
  }

  removeAll(): void {
    // cancel all download
    for (let i = 0; i < this.uploads.length; i++) {
      this.uploads[i].cancelUpload();
    }

    this.uploads = [];
  }

  uploadAll(): void {
    for (let i = 0; i < this.uploads.length; i++) {
      this.upload(i);
    }
  }


  addFiles(selectedFiles: FileList) {
    Array.from(selectedFiles).forEach(file => {
      var fileAlreadyAdded = this.uploads.find(x => x.file.name == file.name)
      if (!fileAlreadyAdded) {
        this.uploads.push(new Upload(file))
      }
    });
  }

  upload(index: number) {
    this.upSvc.pushUpload(this.uploads[index])
  }
}
