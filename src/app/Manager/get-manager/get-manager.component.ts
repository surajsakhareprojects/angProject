import { Component, OnInit } from '@angular/core';
import{ManagerService} from '../manager.service';

@Component({
  selector: 'app-get-manager',
  templateUrl: './get-manager.component.html',
  styleUrls: ['./get-manager.component.css']
})
export class GetManagerComponent implements OnInit {
  allUsers: any;

  constructor(private service:ManagerService) { }

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








