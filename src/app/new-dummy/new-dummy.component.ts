import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-new-dummy',
  template: `<style>
  h1{
    color:red;
    font-weight:bold;
    margin-top:100px;
  }
  ul{
    color:yellow;
  }
  h3{
    color:pink;
    font-weight:bold;
  }
  </style>
  <h1>Pranita</h1>
  <h3>Kavya</h3>
  <ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Contact Us</li>
  </ul>
  `,
  // styles: ['h1{color:blue;}']
})

export class NewDummyComponent implements OnInit {
  
  
  constructor() { }

   title : string = 'pranita';

  ngOnInit() {
      
    
   
  }

}


