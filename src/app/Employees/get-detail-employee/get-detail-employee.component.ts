import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{FormBuilder,FormGroup} from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import{EmployeeApiService} from '../employee-api.service';


@Component({
  selector: 'app-get-detail-employee',
  templateUrl: './get-detail-employee.component.html',
  styleUrls: ['./get-detail-employee.component.css']
})
export class GetDetailEmployeeComponent implements OnInit {

  employeeData:any;

  constructor(private router:Router,private service:EmployeeApiService,
        private activated:ActivatedRoute,private formbuilder:FormBuilder,
        private http:HttpClient) { }

  ngOnInit() {
    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }

  getUser(userId : number){
            this.http.get('http://localhost:3000/developer/'+userId).subscribe(
              (res)=>{
        this.employeeData = res;
        // console.log("single user data",res);
              },
              (error:any)=>
              {console.log(error)}
            )
          }
        
        
          deleteThisEmployee(){
            this.http.delete('http://localhost:3000/developer/'+this.employeeData.id).subscribe(
              (res)=>{
              alert("Data Deleted Successfully");
              this.router.navigate(['/developer']);
              },
              (error:any)=>
              {console.log(error)}
                  )
          }
        

}

