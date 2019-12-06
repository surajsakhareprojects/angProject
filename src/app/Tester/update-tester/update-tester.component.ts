import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{FormBuilder,FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{TesterServiceService} from '../tester-service.service';

@Component({
  selector: 'app-update-tester',
  templateUrl: './update-tester.component.html',
  styleUrls: ['./update-tester.component.css']
})
export class UpdateTesterComponent implements OnInit {

  testerForm: FormGroup;
    ID: number;
    userData: any;

  constructor(private service :TesterServiceService, private formbuilder:FormBuilder,
        private http:HttpClient,private router:Router,
        private activated:ActivatedRoute) { }

  ngOnInit() {
    this.testerForm = this.formbuilder.group({
            userName:[''],
            firstName:[''],
            lastName:[''],
            address:[''],
            age : [''],
            phoneNumber: ['']
          },
          );
      
          let routId : any;
          routId = this.activated.snapshot.paramMap.get('id');
          this.getUser(routId);
  }



    getUser(userId : number){
        this.ID = userId;
        this.http.get('http://localhost:3000/tester/'+ this.ID).subscribe(
          (res)=>{
    this.userData = res;
          },
          (error:any)=>
          {console.log(error)}
        )
      }
      
      updatedPost(testerForm){
        return this.http.
        put('http://localhost:3000/tester/'+this.ID,testerForm).subscribe(
          (res)=>{
            
            alert("Data Updated Successfully");
    
            this.router.navigate(['/tester']);
    },
          (error:any)=>
          {console.log(error)}
        )
      }
    
    }