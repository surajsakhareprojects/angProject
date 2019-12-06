import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{FormBuilder,FormGroup} from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import{TesterServiceService} from '../tester-service.service';

@Component({
  selector: 'app-get-detail-tester',
  templateUrl: './get-detail-tester.component.html',
  styleUrls: ['./get-detail-tester.component.css']
})
export class GetDetailTesterComponent implements OnInit {

  testerData:any;

  constructor(private service:TesterServiceService,private http :HttpClient,
        private formbuilder:FormBuilder,private router :Router,
        private activated:ActivatedRoute) { }

  ngOnInit() {
    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }


  getUser(userId : number){
        this.http.get('http://localhost:3000/tester/'+userId).subscribe(
          (res)=>{
    this.testerData = res;
     //console.log("single user data",this.userData);
          },
          (error:any)=>
          {console.log(error)}
        )
      }

      deleteThisTester(){
    this.http.delete('http://localhost:3000/tester/'+this.testerData.id).subscribe(
      (res)=>{
      alert("Data Deleted Successfully");
      this.router.navigate(['/tester']);
      },
      (error:any)=>
      {console.log(error)}
          )
  }

}


//   deleteThisManager(){
//     this.http.delete('http://localhost:3000/manager/'+this.managerData.id).subscribe(
//       (res)=>{
//       alert("Data Deleted Successfully");
//       this.router.navigate(['/manager']);
//       },
//       (error:any)=>
//       {console.log(error)}
//           )
//   }


// }
