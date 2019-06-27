import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user: any={};
  postss: any[]=[];
  constructor() { 
    firebase.firestore().settings({
      timestampsInSnapshots: true
    })
    this.user= firebase.auth().currentUser;
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(){
    //get the list of posts from firebase
    firebase.firestore().collection("posts").orderBy("created","desc").get().then((data)=>{
      console.log(data.docs);
      this.postss=data.docs;
    }).catch((err)=>{
      console.log(err);
    })
  }

  onPostCreate(){
    // refresh the list
    this.postss=[];
    this.getPosts();

  }

  onDelete(){
    this.postss=[];
    this.getPosts();
  }
}
