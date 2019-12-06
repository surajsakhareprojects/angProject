import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{FormBuilder,FormGroup} from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import{CeoApiService} from '../ceo-api.service';

@Component({
  selector: 'app-get-detail-ceo',
  templateUrl: './get-detail-ceo.component.html',
  styleUrls: ['./get-detail-ceo.component.css']
})
export class GetDetailCeoComponent implements OnInit {
  ceoData:any;
  constructor(private service:CeoApiService,private router:Router,
    private activated:ActivatedRoute,private formbuilder:FormBuilder,
    private http:HttpClient) { }

  ngOnInit() {
    let routId : any;
    routId = this.activated.snapshot.paramMap.get('id');
    this.getUser(routId);
  }



    getUser(userId : number){
        this.http.get('http://localhost:3000/ceo/'+userId).subscribe(
          (res)=>{
    this.ceoData = res;
    // console.log("single user data",res);
          },
          (error:any)=>
          {console.log(error)}
        )
      }
    
    
      deleteThisCEO(){
        this.http.delete('http://localhost:3000/ceo/'+this.ceoData.id).subscribe(
          (res)=>{
          alert("Data Deleted Successfully");
          this.router.navigate(['/ceo']);
          },
          (error:any)=>
          {console.log(error)}
              )
      }
    


}








