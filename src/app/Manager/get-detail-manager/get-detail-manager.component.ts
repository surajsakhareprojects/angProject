import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{FormBuilder,FormGroup} from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import{ManagerService} from '../manager.service';

@Component({
  selector: 'app-get-detail-manager',
  templateUrl: './get-detail-manager.component.html',
  styleUrls: ['./get-detail-manager.component.css']
})
export class GetDetailManagerComponent implements OnInit {
  managerData: any;

  constructor(private service:ManagerService,private http :HttpClient,
    private formbuilder:FormBuilder,private router :Router,
    private activated:ActivatedRoute ) { }

  ngOnInit() {
    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }
  

  getUser(userId : number){
    this.http.get('http://localhost:3000/manager/'+userId).subscribe(
      (res)=>{
this.managerData = res;
 //console.log("single user data",this.userData);
      },
      (error:any)=>
      {console.log(error)}
    )
  }


  deleteThisManager(){
    this.http.delete('http://localhost:3000/manager/'+this.managerData.id).subscribe(
      (res)=>{
      alert("Data Deleted Successfully");
      this.router.navigate(['/manager']);
      },
      (error:any)=>
      {console.log(error)}
          )
  }


}















