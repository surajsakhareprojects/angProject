import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/service-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {
  allTickets: any;
  
  constructor(private service:ServiceApiService,private http: HttpClient, private router: Router) { }

  ngOnInit() {


    

    this.service.getTicketInfo().subscribe(
          (res : any)=>{
            this.allTickets = res;
      // console.log("Create New User Profile",res);
          },
          (error : any)=>{
            console.log(error) ;
          }
        );


  }
}


  


    
  //   getDeveloper() {
  //     this.http.get('http://localhost:3000/developer').subscribe(
  //       (res) => {
  //         this.ticketsData = res;
  //         this.finalTickets();
  // debugger;
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  
  //   getTester() {
  //     this.http.get('http://localhost:3000/tester').subscribe(
  //       (res) => {
  //         this.ticketsData = res;
  //         this.finalTickets();
  
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }

  //   finalTickets(){

  //   let myUser =
  //     this.ticketsData.find(user => (user.ticketName === this.ticketsData.ticketName) ||
  //       (user.userRole === this.ticketsData.userRole) || (user.ticketDescription === this.ticketsData.ticketDescription));

  //   }


  
