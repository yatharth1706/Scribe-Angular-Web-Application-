import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
 
  message: string= "";
  userError: any;
  myForm: FormGroup;

  constructor(public fb: FormBuilder,public authService: AuthService) { 
    this.myForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['' ,[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: this.checkPassword("password","confirmPassword")
    })
  }

  ngOnInit() {
  }


  checkPassword(pass: string, conPass: string){
    return (group:FormGroup)=>{
      let p=group.controls[pass];
      let cp=group.controls[conPass];

      if(p.value== cp.value){
        return;
      }
      else{
        cp.setErrors({
          notEqualToPassword: true
        })
      }
    }
    
  }
  onSubmit(myForm){
    let email: string= myForm.value.email;
    let password: string= myForm.value.password;
    let firstName: string= myForm.value.firstName;
    let lastName: string= myForm.value.lastName;

    

    this.authService.signup(email,password, firstName,lastName).then((user: any)=>{
      
        firebase.firestore().collection("users").doc(user.uid).set({
          firstName: myForm.value.firstName,
          lastName: myForm.value.lastName,
          email: myForm.value.email,
          photoURL: user.photoURL,
          interests: "",
          bio: "",
          hobbies: ""
        }).then(()=>{
          this.message="You have signed up successfully! Please sign in !"
        })
        
    
    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })
  }

}
