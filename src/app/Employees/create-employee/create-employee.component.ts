import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{EmployeeApiService} from '../employee-api.service';

``
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empForm:FormGroup;

  constructor(private formbuilder:FormBuilder,
    private router:Router,private activated:ActivatedRoute,
    private service:EmployeeApiService) { }


    empReg(newData:any){
    console.log("input data:",newData);
    this.service.createUserData(newData).subscribe(
      (res)=>{
    alert("UserData Has been Created");
       
   this.router.navigate(['/developer']);
      },
    (error)=>{
      console.log(error);
    }
    )
      }
    



  ngOnInit() {
    this.empForm = this.formbuilder.group({
      userName:[''],
      firstName:[''],
      lastName:[''],
      address:[''],
      age : [''],
      phoneNumber: [''],
      
    })
  }

}
