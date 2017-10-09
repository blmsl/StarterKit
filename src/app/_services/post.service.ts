import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from "angularfire2/database";
import { AuthService } from "../_services/auth.service";
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { Post } from '../_classes/post';
@Injectable()
export class PostService {

  private basePath: string = '/posts';
  posts: Observable<any[]> = null;

  constructor(private af: AngularFireDatabase, private authService: AuthService) { }

  getPostsList(query = {}): Observable<Post[]> {
    // this.posts = this.af.list(this.basePath, {
    //   query: query
    // });

    return this.posts
  }
  createPost(message: string): void {
    let post = new Post();
    post.content = message.trim();
    post.creatorName = this.authService._user.email;
    post.createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    post.creatorId = this.authService._user.uid;
    // this.posts.push(post);
  }

  deletePost(key: string): void {
    // this.posts.remove(key)
  }

}
