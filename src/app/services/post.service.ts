import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AuthService } from "../services/auth.service";
import * as firebase from 'firebase';

import { Post } from '../classes/post';
@Injectable()
export class PostService {

  private basePath: string = '/posts';
  posts: FirebaseListObservable<Post[]> = null;

  constructor(private af: AngularFireDatabase,private authService: AuthService) { }

  getPostsList(query = {}): FirebaseListObservable<Post[]> {
    this.posts = this.af.list(this.basePath, {
      query: query
    });

    return this.posts
  }
  createPost(message: string): void {
    let post = new Post();
    post.content = message.trim();
    post.creatorName = this.authService._user.email;
    post.createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    post.creatorId = this.authService._user.uid;
    this.posts.push(post);
  }

  deletePost(key: string): void {
    this.posts.remove(key)
  }

}
