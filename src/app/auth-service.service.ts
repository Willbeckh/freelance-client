import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  getToken(){
    let text = localStorage.getItem('token')
    return text
  }
}
