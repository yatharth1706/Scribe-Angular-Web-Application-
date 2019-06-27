import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
 

  myForm: FormGroup;

  constructor(public fb: FormBuilder) { 
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

    let message: string= "";
    let userError: any;

    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      
        message="You have signed up successfully! Please sign in !"
    
    }).catch((error)=>{
      console.log(error);
      userError=error;
    })
  }

}
