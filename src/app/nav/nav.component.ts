import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnDestroy {
  isAuthenticated:boolean = false 
  private userSub:Subscription
  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user? false: true
    })
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
  onLogout(){
    this.authService.logout()
  }

}
