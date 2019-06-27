import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string="";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService, public route: Router) {
    this.myForm= this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]

    })
   }

  ngOnInit() {
  }


  onSubmit(myForm){
    let email: string= myForm.value.email;

    this.authService.login(myForm.value.email,myForm.value.password).then((data)=>{
      console.log(data);
      this.message="You have successfully signed in!";
      this.route.navigate(['myBlogs']);
    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })

}
}