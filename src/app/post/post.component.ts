import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postTest:Post[] = []
  constructor(private service: FileUploadService) { }

  ngOnInit() {
    this.service.getAllPosts()
      .subscribe(data=>{
        data.reverse()
        this.postTest = data
      },err=>{
        console.log(err)
      })
  }

}
