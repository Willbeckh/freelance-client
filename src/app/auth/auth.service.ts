import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError,tap, throwError } from "rxjs";
import { signupModel,AuthResData, loginModel, User } from "./auth.model";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthService{
    
    user = new BehaviorSubject<User>(null)
   constructor(private http:HttpClient, private router:Router){}

     signup(account: signupModel){
        return this.http.post<AuthResData>('http://127.0.0.1:8000/signup/',account)
        .pipe(catchError(this.handleError), tap((res)=>{
            console.log(res)
        }))
     }
     
    login(account: loginModel){
        return this.http.post<AuthResData>('http://127.0.0.1:8000/login/',account)
        .pipe(catchError(this.handleError), tap((res)=>{
            this.handleAuth(res)
        }))
        
    }
    
    autologin(){
        const userData: AuthResData = JSON.parse(localStorage.getItem('user'))

        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email,userData.name,userData.user_id,userData.username,userData.token)
        this.user.next(loadedUser)
        return;
     }

    logout(){
        this.user.next(null)
        localStorage.removeItem('user')
        this.router.navigate(['auth/'])
    }

     private handleError(error: HttpErrorResponse){
        let errorMessage = 'Unknown error occurred'
        if(!error.error){
            return  throwError(errorMessage)
        } 
        if(error.error.non_field_errors){
            errorMessage = error.error.non_field_errors[0]
        }
        if(error.error.email){
            errorMessage = error.error.email[0]
        }
        if(error.error.username){
            errorMessage = error.error.username[0]
        }

        return throwError(errorMessage)
     }
     private handleAuth(res: AuthResData){
        const user = new User(res.email,res.name,res.user_id,res.username,res.token)
        this.user.next(user)
        localStorage.setItem('user',JSON.stringify(user))
     }
}