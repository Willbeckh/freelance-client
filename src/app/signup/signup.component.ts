import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){ }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:'',
      email:'',
      password:''
    })
  }

  // in the submit function we call our backend to register a user
  submit():void{
        this.http.post('http://127.0.0.1:8000/register/',this.form.getRawValue())
        .subscribe(() => this.router.navigate(['\login']))
  }

}
