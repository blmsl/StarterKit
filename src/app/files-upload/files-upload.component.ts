import { Component } from '@angular/core';
import { Upload } from '../classes/upload'
import { UploadService } from '../services/upload.service';
import * as _ from "lodash";


@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent {

  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private upSvc: UploadService) { }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
  }
  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)
    }
    )
  }
}
