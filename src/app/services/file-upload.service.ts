import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost:3000/api'

  postFile(body){
    
    return this.http.post(`${this.url}/post/cdn`, body, {responseType: 'text'})
      
  }
  createPost(body){
    return this.http.post(`${this.url}/post/create`, body)
  }
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}/post/all`)
  }

}
