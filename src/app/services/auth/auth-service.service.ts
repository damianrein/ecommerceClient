import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl = "localhost:8080/auth";

  LoggedIn = false;

  constructor(private http: HttpClient) { }

  login(email: String, password:String): Observable<any> {
    this.LoggedIn = true;
    return this.http.post<any>('${this.apiUrl}/login', {email, password});
  }

  isLoggedIn(){
    return this.LoggedIn;
  }

  logout(){
    this.LoggedIn = false;
  }
}
