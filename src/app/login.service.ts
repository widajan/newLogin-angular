import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import User from './user';
import { BehaviorSubject, Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor( private http: HttpClient ) {
   }

   public getCurrentvalue(): User {
     return this.currentUserSubject.value;
   }

  addLoginData(userData: User) {
    return this.http.post('api/api/user/login', userData)
      .pipe(map(user => user));
  }
  // Logout/ remove user from localstorage
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
