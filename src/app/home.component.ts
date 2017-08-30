import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import {PostService} from './post.service'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  posts: FirebaseListObservable<Post[]>;
  post: Post = new Post();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPostsList();

  }
  createPost(post: Post) {
    this.postService.createPost(post);
    this.post = new Post();
  }

  deletePost(key: string) {
    this.postService.deletePost(key);
  }

}
