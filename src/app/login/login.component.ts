import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


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

  database:any = {
    1000:{acno:1000,uname:"arun",password:1000,balance:5000},
    1001:{acno:1001,uname:"vineeth",password:1001,balance:3000},
    1002:{acno:1002,uname:"shyam",password:1002,balance:7000},
  }

  //login model
  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

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

   //login -using event binding/ two way binding
//   login(){
    
//     var acno = this.acno 
//     var pswd = this.pswd

//     let database = this.ds.database

//     if(acno in database){

//       if(pswd == database[acno]["password"]){
//          alert("Login successfull!!!")
//          this.router.navigateByUrl("dashboard")
//       }
//       else{
//         alert("Incorrect password!!!")
//       }

//     }
//     else{
//       alert("User doesnot exist!!!!")
//     }

//   }

// }

//login -for loging in using data service
login(){
    
  var acno = this.loginForm.value.acno
  var pswd = this.loginForm.value.pswd


if(this.loginForm.valid){
  //call login in dataService
  const result = this.ds.login(acno,pswd)

  if(result){
    alert("Login successfull!!!")
    this.router.navigateByUrl("dashboard")
   }
  }
  else{
    alert("invalid form")
   }
  }
}

//login using template referencing variable #
// login(a:any,p:any){

// console.log(a.value)
    
// //user entered acno and password
//   var acno = a.value
//   var pswd = p.value

//   let database = this.database

//   if(acno in database){

//     if(pswd == database[acno]["password"]){
//        alert("Login successfull!!!")
//     }
//     else{
//       alert("Incorrect password!!!")
//     }

//   }
//   else{
//     alert("User doesnot exist!!!!")
//   }

// }

// }
