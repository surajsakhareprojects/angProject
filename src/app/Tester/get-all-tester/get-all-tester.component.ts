import { Component, OnInit } from '@angular/core';
import{TesterServiceService} from '../tester-service.service';

@Component({
  selector: 'app-get-all-tester',
  templateUrl: './get-all-tester.component.html',
  styleUrls: ['./get-all-tester.component.css']
})
export class GetAllTesterComponent implements OnInit {
  allUsers: any;

  constructor(private service:TesterServiceService) { }

  ngOnInit() {
    this.service.getUserData().subscribe(
            (res : any)=>{
              this.allUsers = res;
        console.log("Create New User Profile",res);
            },
            (error : any)=>{
              console.log(error) ;
            }
          );
  }

}


