import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Upload } from '../_classes/upload';
import * as firebase from 'firebase/app';
import { UtilsService } from '../_services/utils.service';
import { AuthService } from "../_services/auth.service";

@Injectable()
export class UploadService {

  constructor(private authService: AuthService, private db: AngularFireDatabase, private utilsService: UtilsService) { }

  private basePath: string = '/users';

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();

    let uploadTask = storageRef.child(this.basePath + '/' + this.authService._user.uid + "/" + this.utilsService.uuidv4()).put(upload.file);
    upload.uploadTask = uploadTask;

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        upload.bytesTransferred = snapshot.bytesTransferred;
        upload.state = snapshot.state;
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        // this.saveFileData(upload)
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(this.basePath + '/').push(JSON.stringify(upload));
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name)
      })
      .catch(error => console.log(error))
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(this.basePath + '/').remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(this.basePath + '/' + name).delete()
  }
}
