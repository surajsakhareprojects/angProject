import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{ManagerService} from '../manager.service';


@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {

  managerForm:FormGroup;

  constructor(private service:ManagerService,private router:Router,
    private activated:ActivatedRoute,private formbuilder:FormBuilder,
     ) { }

  managerReg(newData:any){
    console.log("input data:",newData);
    this.service.createUserData(newData).subscribe(
      (res)=>{
    alert("UserData Has been Created");
       
   this.router.navigate(['/manager']);
      },
    (error)=>{
      console.log(error);
    }
    )
      }
    


  ngOnInit() {
    this.managerForm = this.formbuilder.group({
      userName:[''],
      firstName:[''],
      lastName:[''],
      address:[''],
      age : [''],
      phoneNumber: [''],
      subjects:[''],
    })
  }

}










