import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{FormBuilder,FormGroup} from '@angular/forms';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  profiles = [];

  constructor(private service:ServiceApiService,private activate:ActivatedRoute,
    private route: Router,private formbuilder:FormBuilder) { 
this.myForm = this.formbuilder.group({
  profiles : ['']
});

this.profiles = this.getProfile();
    }

    getProfile(){
      return[
{id : '0',name : 'Manager'},
{ id: '1', name: 'Developer' },
{ id: '2', name: 'Tester' }
      ];
    }
 myregForm(newData:any){
      console.log("input data:",newData);

      let profileFor: string;
     debugger;
      if(newData.profiles == 0){
        profileFor = 'manager';
      }else 
      if(newData.profiles == 1){
        profileFor = 'developer';
      }else 
      if(newData.profiles == 2){
        profileFor = 'tester';
      }

        this.service.createUserData(newData,profileFor ).subscribe(
          (res)=>{
            alert("UserData Has been Created");
            
            this.route.navigate(['/usersdata']);
          },
          (error)=>{
            console.log(error);
          }
          )
        
      //console.log(this.myForm.value);
        }

  ngOnInit() {
    this.myForm = this.formbuilder.group({
            userName:[''],
            password:[''],
            firstName:[''],
            lastName:[''],
            address:[''],
            age : [''],
            phoneNumber: [''],
            profiles:[''],
          },
      
          );
  }

}




