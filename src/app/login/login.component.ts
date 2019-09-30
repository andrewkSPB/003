import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.setForm()
  }

  setForm(){
    this.authForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],

    })
  }

  onAuthFormSubmit(data){
    this.authService.loginUser(data)
      .subscribe(data=>{
        localStorage.setItem("token", data.token)
        this.router.navigate([''])
      },err=>{
        console.log(err)
      })
  }

  onCreateAccount(){
    this.router.navigate(['create-account'])
  }
}
