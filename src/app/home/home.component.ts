import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post.service'
import { AuthService } from '../services/auth.service'
import 'rxjs/add/operator/map'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  posts: any;
  message: string = "";
  constructor(
    private postService: PostService,
    public auth: AuthService
  ) { }

  ngOnInit() {

    this.posts = this.postService.getPostsList({
      orderByChild: 'createdAt'
    });

  }
  sendMessage() {

    if (this.message.length > 0) {
      this.postService.createPost(this.message);
      this.message = ""
    }

  }

  deletePost(key: string) {
    this.postService.deletePost(key);
  }

}
