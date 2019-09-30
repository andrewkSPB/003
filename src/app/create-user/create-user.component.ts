import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.setForm()
  }

  
  setForm(){
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],

    })
  }

  onSubmit(data){
    this.authService.createUser(data)
      .subscribe((data)=>{
        console.log(data)
        this.router.navigate(['login'])
      },err=>{
        console.log(err)
      })
  }
}
