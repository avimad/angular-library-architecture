import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService extends HttpClient {

  constructor(private httpHandler: HttpHandler, private errorhandler: ErrorHandlerService) {
    super(httpHandler);
  }

  get<T>(url: string, options?: {}): Observable<T> {
    return super.get<T>(url).pipe(retry(1), catchError(this.handleError));
  }
  post<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.post<T>(url, params).pipe(catchError(this.handleError));
  }
  put<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.put<T>(url, params).pipe(catchError(this.handleError));
  }

  delete<T>(url: string, options?: {}): Observable<T> {
    return super.delete<T>(url).pipe(catchError(this.handleError));
  }


  // common error handling method
  public handleError = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    this.errorhandler.handleError(error);
    return throwError(error);
  };
}
