import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import{CeoApiService} from '../ceo-api.service';

@Component({
  selector: 'app-create-ceo',
  templateUrl: './create-ceo.component.html',
  styleUrls: ['./create-ceo.component.css']
})
export class CreateCeoComponent implements OnInit {

  ceoForm:FormGroup;

  constructor(private service:CeoApiService,private formbuilder:FormBuilder,
    private router:Router,private activated:ActivatedRoute) { }


    ceoReg(newData:any){
          console.log("input data:",newData);
          this.service.createUserData(newData).subscribe(
            (res)=>{
          alert("UserData Has been Created");
             
         this.router.navigate(['/ceo']);
            },
          (error)=>{
            console.log(error);
          }
          )
            }
          


  ngOnInit() {
    this.ceoForm = this.formbuilder.group({
                  userName:[''],
                  firstName:[''],
                  lastName:[''],
                  address:[''],
                  age : [''],
                  phoneNumber: [''],
                  
                })
  }

}







// import { Component, OnInit } from '@angular/core';
// 
// import { TeacherServiceService } from '../teacher-service.service';

// @Component({
//   selector: 'app-post-teachersdetail',
//   templateUrl: './post-teachersdetail.component.html',
//   styleUrls: ['./post-teachersdetail.component.css']
// })
// export class PostTeachersdetailComponent implements OnInit {
//   constructor(private activate:ActivatedRoute,
//     private route: Router,private formbuilder:FormBuilder,private service :TeacherServiceService) { }
    
//     teacherForm :FormGroup;
  
//     teacherReg(newData:any){
//     console.log("input data:",newData);
//     this.service.createUserData(newData).subscribe(
//       (res)=>{
//     alert("UserData Has been Created");
       
//    // this.route.navigate(['/usersdata']);
//       },
//     (error)=>{
//       console.log(error);
//     }
//     )
//       }
    
  

// }

