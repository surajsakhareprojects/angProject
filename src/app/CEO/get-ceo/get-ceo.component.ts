import { Component, OnInit } from '@angular/core';
import{CeoApiService} from '../ceo-api.service';

@Component({
  selector: 'app-get-ceo',
  templateUrl: './get-ceo.component.html',
  styleUrls: ['./get-ceo.component.css']
})
export class GetCeoComponent implements OnInit {
  allUsers: any;

  constructor(private service:CeoApiService) { }

  ngOnInit() {
    this.service.getUserData().subscribe(
            (res : any)=>{
              this.allUsers = res;
        // console.log("Create New User Profile",res);
            },
            (error : any)=>{
              console.log(error) ;
            }
          );
      
  }

}


