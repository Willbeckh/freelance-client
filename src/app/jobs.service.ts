import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs';
import { Job } from './job';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  baseurl = 'http://localhost:8000/';
  // baseurl = 'https://devs-freelance.herokuapp.com/';

  constructor(private http: HttpClient) {}

  // api http headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      // 'Access-Control-Allow-Headers':`
      //   'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    }),
  };

  // http methods
  // get all jobs
  getJobs(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + 'jobs/')
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // get job by id
  getJob(id): Observable<any> {
    return this.http
      .get<any>(this.baseurl + 'jobs/' + id)
      .pipe(retry(1), catchError(this.errorHandler));
    //
  }

  // post a job
  postJob(jobData): Observable<any> {
    return this.http
      .post(this.baseurl + 'jobs/', this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
