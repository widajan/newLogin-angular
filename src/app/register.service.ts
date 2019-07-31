import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Register from './register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient ) { }

  registratoinAdd(registerData: Register){
    // the below line of code creates the connection between client and server side. 
    // There should be two api/api, i.e one for proxy and another for path which is defined
    // in server-side (login)
    return this.http.post("api/api/user/register", registerData); 
  }

}
