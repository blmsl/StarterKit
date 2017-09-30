import * as firebase from 'firebase/app';

export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  base64: string;
  progress: number = 0;
  createdAt: Date = new Date();
  private _uploadTask: firebase.storage.UploadTask
  state: string = 'ready';
  bytesTransferred: number = 0;
  constructor(file: File) {
    this.file = file;
  }

  set uploadTask(uploadTask: firebase.storage.UploadTask) {
    this._uploadTask = uploadTask;
  }
  get uploadTask(): firebase.storage.UploadTask {
    return this._uploadTask;
  }

  pauseUpload() {
    if (this._uploadTask) {
      this._uploadTask.pause();
    }
  }

  resumeUpload() {
    if (this._uploadTask) {
      this._uploadTask.resume();
    }
  }

  cancelUpload() {
    if (this._uploadTask) {
      this._uploadTask.cancel();
    }
  }

}
