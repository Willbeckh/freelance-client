import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = ''
  constructor(
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/user/', { withCredentials: true})
    .subscribe(res => {
          this.message = `Hi ${res}`
    },err => {
            this.message = 'You are not logged in' 
    })
  }

}
