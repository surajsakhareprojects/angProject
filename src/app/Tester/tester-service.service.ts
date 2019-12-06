import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TesterServiceService {

  constructor(private http:HttpClient) { }

  createUserData(regValue:any){
         return this.http.post(environment.myURL+'/tester/',regValue);
         }

         getUserData():any{
                 return this.http.get(environment.myURL+'/tester/');
              }
}
