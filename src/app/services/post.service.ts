import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

import { Post } from '../classes/post';
@Injectable()
export class PostService {

  private basePath: string = '/posts';
  posts: FirebaseListObservable<Post[]> = null;

  constructor(private af: AngularFireDatabase) { }

  getPostsList(query = {}): FirebaseListObservable<Post[]> {
    this.posts = this.af.list(this.basePath, {
      query: query
    });

    return this.posts
  }
  createPost(post: Post): void {
    this.posts.push(post)
  }

  deletePost(key: string): void {
    this.posts.remove(key)
  }

}
