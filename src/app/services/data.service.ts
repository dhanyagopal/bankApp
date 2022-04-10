import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

database:any = {
    1000:{acno:1000,uname:"arun",password:1000,balance:5000},
    1001:{acno:1001,uname:"vineeth",password:1001,balance:3000},
    1002:{acno:1002,uname:"shyam",password:1002,balance:7000},
  }
  constructor() { }
  //register
  register(uname:any, acno:any, password:any){

    // var acno=parseInt(acno1)
    let database = this.database

    if(acno in database){
      //already exist
      return false
    }
    else{
      //add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0
      }
       console.log(database);
       return true
       
    }
  }

//login
login(acno:any,pswd:any){
    
  // var acno = this.acno 
  // var pswd = this.pswd

  let database = this.database

  if(acno in database){

    if(pswd == database[acno]["password"]){
       //already exist in db
      return true
    }
    else{
      alert("Incorrect password!!!")
      return false
    }

  }
  else{
    alert("User doesnot exist!!!!")
    return false
  }

}

//deposit
deposit(acno:any,pswd:any,amt:any){

  var amount = parseInt(amt)

  let database = this.database

  if(acno in database){
    if(pswd == database[acno]["password"]){
      database[acno]["balance"] +=amount
      return database[acno]["balance"]
    }
    else{
      alert("Incorrect password!!!")
      return false
    }
  }
else{
  alert("User doesnot exist!!!")
  return false
    }
  }
}

