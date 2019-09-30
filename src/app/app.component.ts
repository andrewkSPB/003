import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'board';
  userName = ''

  constructor(private router:Router){

  }

  


  onLogin(){
    this.router.navigate(['login'])
  }
  onEditPost(){
    this.router.navigate(['create-post'])
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.decodeToken()
  }
  decodeToken(){
    const token = localStorage.getItem('token')
    if(token){
      const payload = jwt_decode(token)
     console.log(payload.name)
    }
  }
}
