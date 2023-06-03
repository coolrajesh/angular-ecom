import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  apiGet(url1:any):Observable<any>{
 let url = environment[url1 as keyof typeof environment];
  console.log(url);
  return this.http.get<any>(environment.apiProtocol + environment.apiHost + url).pipe(retry(1), catchError(this.handleError));  
}

  apiPost(payload:any,url1:any) {
  const headers = { 'Authorization': '@3%#887898768686868!', 'My-Custom-Header': 'foobar' };
  //payload['headers'] = headers;  
  let url = environment[url1 as keyof typeof environment];
  return this.http.post<any>(environment.apiProtocol + environment.apiHost + url, payload,{ headers: headers});
}

// create(payload:any,url1:any) {
//   let url = environment[url1 as keyof typeof environment];
//   return this.http.post<any>(environment.apiProtocol + environment.apiHost + url, payload);
// }


// Error handling
handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  //this.toastr.error(errorMessage, '');
  return throwError(() => {
    return errorMessage;
  });
}

}
