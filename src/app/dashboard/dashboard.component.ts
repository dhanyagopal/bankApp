import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //for displaying user name in dashboard(html)
  user:any
  acno:any

  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""

  //deposit model
  depositForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  //withdraw model
  withdrawForm = this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  loginDate:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
   this.user=this.ds.currentUser //to pass username to dashboard(html)page while loading the page,add this inside constructor
   this.loginDate= new Date()
   }

   
  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please Log In...")
      this.router.navigateByUrl("")
    }
  }

  deposit(){
  // alert("Deposit Clicked!!!!")

  var acno = this.depositForm.value.acno
  var pswd = this.depositForm.value.pswd
  var amount = this.depositForm.value.amount

if(this.depositForm.valid){
  const result = this.ds.deposit(acno,pswd,amount)
  if(result){
    alert(amount +"successfully deposited..And new balance is:" + result)
      }
}
else{
  alert("invalid form")
    }
 }

 withdraw(){

  var acno = this.withdrawForm.value.acno1
  var pswd = this.withdrawForm.value.pswd1
  var amount = this.withdrawForm.value.amount1

if(this.withdrawForm.valid){
  const result = this.ds.withdraw(acno,pswd,amount)
 if(result){
   alert(amount +"successfully debitted..And new balance is:" + result)
     }

  }
  else{
    alert("invalid form")
  }
} 

//delete from parent
deletefromParent(){
  this.acno= JSON.parse(localStorage.getItem("currentAcno")||'')
}

//logout
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  this.router.navigateByUrl("")
}

//onCancel
onCancel(){
  this.acno=""
}

//ondelete
onDelete(event:any){
  alert("delete account "+event)
}
}
