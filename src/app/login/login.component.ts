import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accnum="Account number Please!!!"
  acno=""
  pswd=""

  database = {
    1000:{acno:1000,uname:"arun",password:1000,balance:5000},
    1001:{acno:1001,uname:"vineeth",password:1001,balance:3000},
    1002:{acno:1002,uname:"shyam",password:1002,balance:7000},
  }
  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){

   //console.log(event.target.value)
    this.acno= event.target.value
    console.log(this.acno)
    
  }

  pswdChange(event:any){

    //console.log(event.target.value)
     this.pswd= event.target.value
     console.log(this.pswd)

   }

  login(){
    alert("login clicked!!!")
  }

}
