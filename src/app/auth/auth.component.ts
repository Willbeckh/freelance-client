import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResData } from './auth.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isloginMode = true;
  signupForm:FormGroup;
  loginForm: FormGroup;
  token:string;
  error:string = null;
  success:string = null;


  constructor( private authservice: AuthService, private router: Router ) { }

  ngOnInit(): void {
     this.signupForm = new FormGroup({
       'name': new FormControl(null, Validators.required),
       'username': new FormControl(null, Validators.required),
       'email': new FormControl(null, [Validators.required,Validators.email]),
       'passwords': new FormGroup({
          'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
          'confirmpassword': new FormControl(null, Validators.required)

       },this.passwordCheck)
     })
     this.loginForm = new FormGroup({
        'email': new FormControl(null, [Validators.required,Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
     })

  }

 onSwitch(){
  this.isloginMode = !this.isloginMode;
 }
 onSignup(){
    this.authservice.signup({
      'email': this.signupForm.get('email').value,
      'name': this.signupForm.get('name').value,
      'username': this.signupForm.get('username').value,
      'password': this.signupForm.get('passwords.password').value
    }).subscribe(
      (data:AuthResData) => { 
        this.isloginMode = true
        this.success =  'sign up was successful'
        this.error = null
      },(error)=>{
        this.error = error
      })
 }
 onLogin(){
    this.authservice.login(this.loginForm.value)
    .subscribe(
      (data: AuthResData) => {
        this.token = data.token
        this.router.navigate([''])
        this.loginForm.reset()
      },
      (errorRes) => {
        this.error = errorRes
      }
      
    )
 }
 passwordCheck(control: FormGroup):{[s:string]:boolean}{
    if(control.get('password').value != control.get('confirmpassword').value ){
        return {'notsame':true}
    }
     return null
 }

}
