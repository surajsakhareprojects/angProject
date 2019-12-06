import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import{ServiceApiService} from 'src/app/service-api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private service:ServiceApiService,private router:Router){}

  canActivate(): boolean{

    if(this.service.isUserLoggedInData() == 'true'){
      return true;
      
    }else{
    this.router.navigate(['/login']);
      return false;
    }
  }
  
}
