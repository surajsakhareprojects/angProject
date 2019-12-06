import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{FormBuilder,FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{CeoApiService} from '../ceo-api.service';

@Component({
  selector: 'app-upadate-ceo',
  templateUrl: './upadate-ceo.component.html',
  styleUrls: ['./upadate-ceo.component.css']
})
export class UpadateCeoComponent implements OnInit {

  ceoForm: any;
  ID: number;
  userData: any;
  //cForm:any;


  constructor(private service:CeoApiService,private formbuilder:FormBuilder,
    private http:HttpClient,private router:Router,
    private activated:ActivatedRoute,) { }

  ngOnInit() {
    this.ceoForm = this.formbuilder.group({
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
    this.http.get('http://localhost:3000/ceo/'+this.ID).subscribe(
      (res)=>{
this.userData = res;
// console.log("single user data",res);
      },
      (error:any)=>
      {console.log(error)}
    )
  }
  
  updatedPost(userData){
    return this.http.
    put('http://localhost:3000/ceo/'+this.ID,userData).subscribe(
      (res)=>{
        
        alert("Data Updated Successfully");

         this.router.navigate(['/ceo']);
},
      (error:any)=>
      {console.log(error)}
    )
  }

}




