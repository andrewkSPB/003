import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Token } from '../models/token';

const url = `/api`

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }

  createUser(data): Observable<User>{
    return this.http.post<User>(`${url}/user/create`, data)
  }

  loginUser(data):Observable<Token>{
    return this.http.post<Token>(`${url}/user/login`, data)
  }
}
