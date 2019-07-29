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
    return this.http.post('api/add/register', registerData); 
  }

}
