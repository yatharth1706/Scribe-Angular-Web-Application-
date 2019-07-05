import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  loggedIn: boolean= false;
  user:any;

  constructor() { 
    
    this.user = firebase.auth().currentUser;
    
    if(this.user){
      this.loggedIn=true;
      // this.user = firebase.auth().currentUser;
      console.log(this.user.uid);
    }  else{
      this.loggedIn=false;
    }
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user=user;
        this.loggedIn=true;
        console.log(this.user.uid);
      }  else{
        this.loggedIn=false;
      } 
    })
  }

  ngOnInit() {
  }
 
  logout(){
    firebase.auth().signOut();
  }
}
