import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Post } from '../models/post';
 

const url = `/api`

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }


  postFile(body){
    
    return this.http.post(`${url}/post/cdn`, body, {responseType: 'text'})
      
  }
  createPost(body){
    return this.http.post(`${url}/post/create`, body)
  }
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${url}/post/all`)
  }

}
