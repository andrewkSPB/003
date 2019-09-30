import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  createUser(data): Observable<User>{
    return this.http.post<User>(`${this.url}/user/create`, data)
  }

  loginUser(data):Observable<Token>{
    return this.http.post<Token>(`${this.url}/user/login`, data)
  }
}
