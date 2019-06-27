import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Output('postCreated') postCreated=new EventEmitter();
  constructor() { }
  title: string;
  content: string;

  editorConfig={
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "0",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image", "video"]
    ]
}
  ngOnInit() {
  }

  createPost(){
    firebase.firestore().settings({
      timestampsInSnapshots: true
    })

    firebase.firestore().collection("posts").add({
     title: this.title,
     content: this.content,
     owner: firebase.auth().currentUser.uid,
     created: firebase.firestore.FieldValue.serverTimestamp() 
    }).then((data)=>{
      console.log(data);
      this.postCreated.emit();
    }).catch((error)=>{
      console.log(error);
    }) 
  }
}
