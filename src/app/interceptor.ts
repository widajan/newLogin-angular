import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable()
export class AppendToken implements HttpInterceptor {
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    // we get the token which is send from loginComponent (set there)
    // In order to access it, it should be loaded in app.module providers section
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
    }
    return next.handle(request);
 
  }
 
}