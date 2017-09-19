import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post.service'
import { AuthService } from '../services/auth.service'
import 'rxjs/add/operator/map'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  posts: any;
  post: Post = new Post();

  constructor(private postService: PostService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.posts = this.postService.getPostsList({
      orderByChild: 'createdAt'
    }).map((arr) => { return arr.reverse(); })

  }
  createPost(post: Post) {
    this.postService.createPost(post);
    this.post = new Post();
  }

  deletePost(key: string) {
    this.postService.deletePost(key);
  }

}
