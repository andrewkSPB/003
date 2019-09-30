import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup
  imgUrl: String = ''
  userId: String ='anonymous'

  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private router: Router) { }

  ngOnInit() {
    this.setForm()
  }

  setForm(){
    this.postForm = this.fb.group({
      text: '',
      user: '',
      imgCDN: ''
    })
  }
  
  
  
  selectedFile: File = null
  onSubmit(data){
    this.fileUploadService.createPost(data)
      .subscribe(data=>{
        console.log(data)
        this.router.navigate([''])
      },err=>{
        console.log(err)
      })
  }
  


  onFileSelected(event){

    
    this.selectedFile = event.target.files[0]

    const formData: FormData = new FormData()
    formData.append('inputName', this.selectedFile, this.selectedFile.name)

    

    this.fileUploadService.postFile(formData)
      .subscribe((data)=>{
        console.log(data)
        this.imgUrl = data
      },err=>{
        console.log(err)
      })
  }

  


}
