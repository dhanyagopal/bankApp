import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=""
  // acno=""
  // pswd=""

  //registerForm Model(Reactive Forms),this is like variable so declared above constructor
  registerForm =this.fb.group({
     uname:[''],
     acno:[''],
     pswd:['']
  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // register(){
  //   // alert("register clicked!!!")
  //   var acno =this.acno
  //   var pswd = this.pswd
  //   var uname = this.uname
  //   const result = this.db.register(uname,acno,pswd)

  //   if(result){
  //     alert("successfully registered!!!")
  //     this.router.navigateByUrl("")
  //   }
  //   else{
  //     alert("Account already exist.. please login")
  //     this.router.navigateByUrl("")
  //   }
  
  // }


  //register using registerForms method
  register(){
    //bind variables using model variables
    var acno =this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd
    var uname = this.registerForm.value.uname
    
    const result = this.db.register(uname,acno,pswd)

    if(result){
      alert("successfully registered!!!")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exist.. please login")
      this.router.navigateByUrl("")
    }
  
  }

}
