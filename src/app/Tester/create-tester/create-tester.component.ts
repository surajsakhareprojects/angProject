import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{TesterServiceService} from '../tester-service.service';


@Component({
  selector: 'app-create-tester',
  templateUrl: './create-tester.component.html',
  styleUrls: ['./create-tester.component.css']
})
export class CreateTesterComponent implements OnInit {

  testerForm:FormGroup;

  constructor(private service:TesterServiceService,private router:Router,
     private activated:ActivatedRoute,private formbuilder:FormBuilder,
          ) {}

          testerReg(newData:any){
    console.log("input data:",newData);
    this.service.createUserData(newData).subscribe(
      (res)=>{
    alert("UserData Has been Created");
       
   this.router.navigate(['/tester']);
      },
    (error)=>{
      console.log(error);
    }
    )
      }

    ngOnInit() {
    
          this.testerForm = this.formbuilder.group({
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


