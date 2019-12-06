import { Component, OnInit ,ViewChild ,AfterViewInit ,ElementRef} from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {





  empId : number=12;
  
  
  
  myForm: FormGroup;
  myForm1: FormGroup;

  constructor(private activated:ActivatedRoute,private router:Router,

    private formbuilder:FormBuilder) { }


  ngOnInit() {
    const id = this.activated.snapshot.paramMap.get('empId');

    console.log('reactive form id :',id);
    
    this.activated.queryParams.subscribe(
      params=> {
      
        console.log("url parameters are:",params);
        console.log("url parameters are:",params.username);
      });



      const address = this.formbuilder.group({ 
        buildingNo: [],
        landmark:[],
        city: [],
        district: [],
      })
  
      this.myForm = this.formbuilder.group({
        email: '',
        currentAddress: address,
        nativeAddress: address,
      })
      
      this.myForm1 = this.formbuilder.group({
        Fname: '',
        Mname: '',
        Lname: '',
        cityName:''
      })

  }

  gotoUserdetails(){
    let myName:string = 'Pranita';
    this.router.navigate(['/login'],{queryParams:{username:myName}});
}

myFormGroup(){
  console.log("Form's Contents::",this.myForm.value);
}

myFormGroup1(){
  console.log("Form's Contents::",this.myForm1.value);
}

}
