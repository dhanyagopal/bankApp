import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //to get user name from db
  currentUser:any
  currentAcno:any//var declared for transaction()

database:any = {
    1000:{acno:1000,uname:"arun",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"vineeth",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,uname:"shyam",password:1002,balance:7000,transaction:[]},
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
        balance:0,
        transaction:[]
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
      this.currentUser = database[acno]["uname"]//to send user name to dashboard.ts
      this.currentAcno = acno //to insert the current logined user acno into the var currentAcno(to display in transction history )
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
      database[acno]["transaction"].push({
        type:"CREDIT",
        amount:amount    
      })
     // console.log(database);
      
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

//withdraw
withdraw(acno:any,pswd:any,amt:any){

  var amount = parseInt(amt)

  let database = this.database

  if(acno in database){
    if(pswd == database[acno]["password"]){
        if(database[acno]["balance"]>amount){
          database[acno]["balance"] -=amount
          database[acno]["transaction"].push({
            type:"DEBIT",
            amount:amount    
          })
          //console.log(database);
          
          return database[acno]["balance"]
        }
        else{
          alert("Insuficcient balance!!!")
          return false
        }
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

  //transaction-to get transaction history
  transaction(acno:any){
  return this.database[acno].transaction // to return the transaction array of corresponding acno to transaction.html page

  }


}

