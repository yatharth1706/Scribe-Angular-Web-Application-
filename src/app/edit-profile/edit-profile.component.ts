import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input('post') post: any;
  user: any = {};
  message: string;
  constructor() { 
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile(){
    let userId=firebase.auth().currentUser.uid;
    
    

    firebase.firestore().collection("users").doc(userId).get().then((info) => {

      this.user = info.data();
      this.user.displayName = this.user.firstName + " " + this.user.lastName
      console.log(this.user);

    }).catch((error) => {
      console.log(error);
    })

  }

  update(){

    this.message = "Updating Profile...";

    firebase.auth().currentUser.updateProfile({
      displayName: this.user.displayName, photoURL: this.user.photoURL
    }).then(() => {

      let userId = firebase.auth().currentUser.uid;
      firebase.firestore().collection("users").doc(userId).update({
        firstName: this.user.displayName.split(' ')[0],
        lastName: this.user.displayName.split(' ')[1],
        hobbies: this.user.hobbies,
        interests: this.user.interests,
        bio: this.user.bio
      }).then(() => {

        this.message = "Profile Updated Successfully.";

      }).catch((error) => {
        console.log(error)
      })


    }).catch((error) => {
      console.log(error)
    })

  }



}
