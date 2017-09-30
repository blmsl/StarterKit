import { Component, Output,Input } from '@angular/core';
import { Upload } from '../../../classes/upload'
import { UploadService } from '../../../services/upload.service';
import * as _ from "lodash";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Input() uploads: Array<Upload>;
  constructor(private upSvc: UploadService) {
  }

  removeUpload(index: number) {
    this.uploads[index].cancelUpload();
    this.uploads.splice(index, 1);
  }


  addFiles(selectedFiles: FileList) {
    Array.from(selectedFiles).forEach(file => {
      var fileAlreadyAdded = this.uploads.find(x => x.file.name == file.name)
      if (!fileAlreadyAdded) {
        var upload = new Upload(file);
        this.uploads.push(upload)
        this.upload(upload);

        var reader = new FileReader();
        reader.onload = function (e) {
          upload.base64= e.target['result'];
        }

        reader.readAsDataURL(file);
      }
    });
  }

  upload(upload: Upload) {
    this.upSvc.pushUpload(upload)
  }

}
