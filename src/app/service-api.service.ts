import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

export interface userData {
  id: number,
  ticketDescription : string,
  ticketName: string,
  userInfo : number,
  userRole : string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http:HttpClient) { }

  createUserData(regValue:any, profileFor: any){
    return this.http.post(environment.myURL+'/'+ profileFor +'/',regValue);
    }

    submitTicket(ticketInfo:userData): Observable<any>{
      return this.http.post(environment.myURL+'/tickets/',ticketInfo);
    }

     getTicketInfo():any{
      return this.http.get(environment.myURL+'/tickets/');
     }

   getAllTickets():any{
      return this.http.get(environment.myURL+'/users/');
   }
   

   getDevInfo():any{
    return this.http.get(environment.myURL+'/developer/');
 }

   getTesterInfo():Observable<any>{
    return this.http.get(environment.myURL+'/tester/');
 }



    isUserLoggedInData(){
    
      return localStorage.getItem('isUserLogin');
    }
}
