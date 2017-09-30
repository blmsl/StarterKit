import { Component, OnInit } from '@angular/core';
import { Post } from '../../_classes/post';
import { PostService } from '../../_services/post.service'
import { AuthService } from '../../_services/auth.service'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map'


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
