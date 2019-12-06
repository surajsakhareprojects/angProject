import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { FormBuilder ,FormGroup} from '@angular/forms';
import{EmployeeApiService} from '../employee-api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empForm:FormGroup;
  ID: number;
  userData: any;


  constructor(private formbuilder:FormBuilder,
    private http:HttpClient,private router:Router,
    private activated:ActivatedRoute,private service:EmployeeApiService) { }

  ngOnInit() {
    this.empForm = this.formbuilder.group({
      userName:[''],
      firstName:[''],
      lastName:[''],
      address:[''],
      age : [''],
      phoneNumber: [''],
      profiles:['']
    },
    );
  
    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }


  getUser(userId : number){
    this.ID = userId;
    this.http.get('http://localhost:3000/developer/'+this.ID).subscribe(
      (res)=>{
this.userData = res;
// console.log("single user data",res);
      },
      (error:any)=>
      {console.log(error)}
    )
  }
  
  updatedPost(empForm){
    return this.http.put('http://localhost:3000/developer/'+this.ID,empForm).subscribe(
      (res)=>{
        
        alert("Data Updated Successfully");

         this.router.navigate(['/employees']);
},
      (error:any)=>
      {console.log(error)}
    )
  }


}



