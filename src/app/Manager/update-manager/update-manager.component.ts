import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{FormBuilder,FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{ManagerService} from '../manager.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  mngrForm: FormGroup;
  ID: number;
  userData: any;


  constructor(private service :ManagerService, private formbuilder:FormBuilder,
    private http:HttpClient,private router:Router,
    private activated:ActivatedRoute) { }

  ngOnInit() {
    this.mngrForm = this.formbuilder.group({
      userName:[''],
      firstName:[''],
      lastName:[''],
      address:[''],
      age : [''],
      phoneNumber: [''],
    },
    );

    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }


  getUser(userId : number){
    this.ID = userId;
    this.http.get('http://localhost:3000/manager/'+ this.ID).subscribe(
      (res)=>{
this.userData = res;
// console.log("single user data",res);
      },
      (error:any)=>
      {console.log(error)}
    )
  }
  
  updatedPost(mngrForm){
    return this.http.
    put('http://localhost:3000/manager/'+this.ID,mngrForm).subscribe(
      (res)=>{
        
        alert("Data Updated Successfully");

        this.router.navigate(['/manager']);
},
      (error:any)=>
      {console.log(error)}
    )
  }

}









// import { Component, OnInit } from '@angular/core';
// import{Location}from '@angular/common';
// import{ActivatedRoute,Router} from '@angular/router';
// import{FormBuilder,FormGroup} from '@angular/forms';
// import { ServiceApiService } from 'src/app/service-api.service';
// import {HttpClient} from '@angular/common/http';

// @Component({
//   selector: 'app-updateuser',
//   templateUrl: './updateuser.component.html',
//   styleUrls: ['./updateuser.component.css']
// })
// export class UpdateuserComponent implements OnInit {
//   regForm: FormGroup;
//   userData: any;
//   ID : number;

//   constructor(private formbuilder : FormBuilder, 
//     private router : Router,private activated : ActivatedRoute,private location : Location ,
// private serviceAPI:ServiceApiService,private http:HttpClient) { }

//   ngOnInit() {

//     this.regForm = this.formbuilder.group({
//       userName:[''],
//       firstName:[''],
//       lastName:[''],
//       address:[''],
//       age : [''],
//       phoneNumber: [''],
//     },
//     );

//     let routId : any;
//     routId = this.activated.snapshot.paramMap.get('id');
//     this.getUser(routId);
//   }

//   getUser(userId : number){
//     this.ID = userId;
//     this.http.get('http://localhost:3000/users/'+this.ID).subscribe(
//       (res)=>{
// this.userData = res;
// // console.log("single user data",res);
//       },
//       (error:any)=>
//       {console.log(error)}
//     )
//   }
  
//   updatedPost(regForm){
//     return this.http.
//     put('http://localhost:3000/users/'+this.ID,regForm).subscribe(
//       (res)=>{
        
//         alert("Data Updated Successfully");

//          this.router.navigate(['/users']);
// },
//       (error:any)=>
//       {console.log(error)}
//     )
//   }
// }
