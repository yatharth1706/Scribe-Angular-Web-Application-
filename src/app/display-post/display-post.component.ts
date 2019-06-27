import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  @Input('post') post: any;
  @Output('onDeletes') onDeletes=new EventEmitter();

  postData: any={};
  user: any={};
  constructor() { }

  ngOnInit() {
    this.postData=this.post.data();
    this.user=firebase.auth().currentUser;
  }

  onDelete(){
    firebase.firestore().collection("posts").doc(this.post.id).delete();
    this.onDeletes.emit();
  }
}
