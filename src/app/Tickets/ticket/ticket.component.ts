import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceApiService, userData } from 'src/app/service-api.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  myForm: FormGroup;
  userRole =
    [
      { id: '1', name: 'Developer' },
      { id: '2', name: 'Tester' }
    ];
  devloperInfo: any;
  testerInfo: any;
  userInfo: any = [];
  constructor(private service: ServiceApiService, private router: Router,
    private activated: ActivatedRoute, private formbuilder: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.formbuilder.group({
      ticketName: [''],
      ticketDescription: [''],
      userRole: [''],
      userInfo: [''],
    });
  }

  modo(event) {
    console.log('event:: ', event);
    if (event == 'Developer') {

      this.service.getDevInfo().subscribe(
        (res) => {
          this.userInfo = res;

        },
        (error) => {
          console.log(error);
        }
      )

    } else if (event == 'Tester') {
      this.service.getTesterInfo().subscribe(
        (res: userData) => {
          this.userInfo = res;

        },
        (error) => {
          console.log(error);
        },
        
      )
    } else {
      console.log('Dummy value selected');
    }
  }



  ticketInfo(ticketInfo: any) {

    console.log("input data:", ticketInfo);

    

    this.service.submitTicket(ticketInfo).subscribe(
      (res: userData) => {
        console.log('res:: ', res);
        alert("Ticket Has been Submitted");

      },
      (error) => {
        console.log(error);
      }
    )

  }


}



