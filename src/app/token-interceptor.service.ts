import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: { clone: any; },next: any){
    let authService = this.injector.get(AuthServiceService)
    let tokenizedRequest = req.clone({
      setHeaders: {
         Authorization :`Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
