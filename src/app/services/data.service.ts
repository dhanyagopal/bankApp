import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//declaring options globally to fetch token for(deposit/withdraw/transaction)
const options ={
  headers:new HttpHeaders()
}

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


  constructor(private http:HttpClient) {
      this.getDetails()
   }


//to save data in local storage
// saveDetails(){
//   localStorage.setItem("database",JSON.stringify(this.database))

//   if(this.currentAcno){
//     localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
//   }
//   if(this.currentUser){
//     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//   }
// }

saveDetails(){
  localStorage.setItem("database",JSON.stringify(this.database))

  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}

 
//to get data from local storage
// getDetails(){
//   if(localStorage.getItem("database")){
//     this.database=JSON.parse(localStorage.getItem("database")||'')
//   }
//   if(localStorage.getItem("currentAcno")){
//     this.database=JSON.parse(localStorage.getItem("currentAcno")||'')
//   }
//   if(localStorage.getItem("currentUser")){
//     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
//   }
// }

getDetails(){
  if(localStorage.getItem("database")){
    this.database=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
}


  //register
  register(uname:any, acno:any, password:any){
    //req body
    const data ={
      uname,
      acno,
      password
    }
     
  return this.http.post('http://localhost:3000/register',data)
  }


  // //register -before db integration
  // register(uname:any, acno:any, password:any){

  //   // var acno=parseInt(acno1)
  //   let database = this.database

  //   if(acno in database){
  //     //already exist
  //     return false
  //   }
  //   else{
  //     //add details into db
  //     database[acno]={
  //       acno,
  //       uname,
  //       password,
  //       balance:0,
  //       transaction:[]
  //     }
  //      console.log(database);
  //      this.saveDetails()
  //      return true
       
  //   }
  // }


//login after integration
login(acno:any,pswd:any){
 //req body
 const data ={
   acno,
   pswd
 }
  
 //login api call
 return this.http.post('http://localhost:3000/login',data)
}


//login
// login(acno:any,pswd:any){
    
//   // var acno = this.acno 
//   // var pswd = this.pswd

//   let database = this.database

//   if(acno in database){

//     if(pswd == database[acno]["password"]){
//       this.currentUser = database[acno]["uname"]//to send user name to dashboard.ts
//       this.currentAcno = acno //to insert the current logined user acno into the var currentAcno(to display in transction history )
//       this.saveDetails()
//       //already exist in db
//        return true
//     }
//     else{
//       alert("Incorrect password!!!")
//       return false
//     }

//   }
//   else{
//     alert("User doesnot exist!!!!")
//     return false
//   }
// }


//deposit - after integration
deposit(acno:any,pswd:any,amt:any){

  const data ={
    acno,
    pswd,
    amt
  }
  //deposit api call
  return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }

  //add token to req header
  getOptions(){
    //to fetch token
    const token = JSON.parse(localStorage.getItem("token")||'')

    //create http header
    let headers = new HttpHeaders()

    if(token){
      headers = headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }

  //deposit 
// deposit(acno:any,pswd:any,amt:any){

//   var amount = parseInt(amt)
  
//   let database = this.database

//   if(acno in database){
//     if(pswd == database[acno]["password"]){
//       database[acno]["balance"] +=amount
//       database[acno]["transaction"].push({
//         type:"CREDIT",
//         amount:amount    
//       })
//      // console.log(database);
//       this.saveDetails()
//       return database[acno]["balance"]
//     }
//     else{
//       alert("Incorrect password!!!")
//       return false
//     }
//   }
// else{
//   alert("User doesnot exist!!!")
//   return false
//     }
//   }

//withdraw after integration
withdraw(acno:any,pswd:any,amt:any){
  const data ={
    acno,
    pswd,
    amt
  }
  //withdraw api call
  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }

  //withdraw
// withdraw(acno:any,pswd:any,amt:any){

//   var amount = parseInt(amt)

//   let database = this.database

//   if(acno in database){
//     if(pswd == database[acno]["password"]){
//         if(database[acno]["balance"]>amount){
//           database[acno]["balance"] -=amount
//           database[acno]["transaction"].push({
//             type:"DEBIT",
//             amount:amount    
//           })
//           //console.log(database);
//           this.saveDetails()
//           return database[acno]["balance"]
//         }
//         else{
//           alert("Insuficcient balance!!!")
//           return false
//         }
//       }
//     else{
//       alert("Incorrect password!!!")
//       return false
//     }
//   }
// else{
//   alert("User doesnot exist!!!")
//   return false
//     }
//   }

//transaction-after integration
transaction(acno:any){

  const data ={
    acno

  }
  //transaction api call
  return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
}


//onDelete
onDelete(acno:any){
  //onDelete API call
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())
}

  //transaction-to get transaction history
  // transaction(acno:any){
  // return this.database[acno].transaction // to return the transaction array of corresponding acno to transaction.html page

  // }


}

