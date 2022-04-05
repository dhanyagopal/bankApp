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

  database:any = {
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

   //login -using event binding/ two way binding
  login(){
    
    var acno = this.acno
    console.log(acno);
    
    var pswd = this.pswd

    let database = this.database

    if(acno in database){

      if(pswd == database[acno]["password"]){
         alert("Login successfull!!!")
      }
      else{
        alert("Incorrect password!!!")
      }

    }
    else{
      alert("User doesnot exist!!!!")
    }

  }

}


//login using referencing variable #
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
