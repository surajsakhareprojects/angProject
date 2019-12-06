import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profiles = [
    { id: '0', name: 'Manager' },
    { id: '1', name: 'Developer' },
    { id: '2', name: 'Tester' }
  ];

  constructor(private http: HttpClient, private router: Router) { }

  userData: any;
  formData: any;

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    this.http.get('http://localhost:3000/manager').subscribe(
      (res) => {
        this.userData = res;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  getManager() {
    this.http.get('http://localhost:3000/manager').subscribe(
      (res) => {
        this.userData = res;
        this.finalLogin();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getDeveloper() {
    this.http.get('http://localhost:3000/developer').subscribe(
      (res) => {
        this.userData = res;
        this.finalLogin();
debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTester() {
    this.http.get('http://localhost:3000/tester').subscribe(
      (res) => {
        this.userData = res;
        this.finalLogin();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  login(formValues: any) {
    this.formData = formValues;
    if(this.formData.profile == 0){
      this.getManager();
    }else
    if(this.formData.profile == 1){
      this.getDeveloper();
    }else
    if(this.formData.profile == 2){
      this.getTester();
    }
  }

  finalLogin(){
    
    let myUser =
      this.userData.find(user => (user.userName === this.formData.userName) &&
        (user.password === this.formData.password) && (user.profiles === this.formData.profile));
debugger;
    if (myUser) {
      localStorage.setItem("isUserLogin", "true");
      alert('Ok');
      debugger;
      if(this.formData.profile == 0){
        this.router.navigate(['/manager']);
      }else
      if(this.formData.profile == 1){
        this.router.navigate(['/developer']);
      }else
      if(this.formData.profile == 2){
        this.router.navigate(['/tester']);
      }else{
        this.router.navigate(['/login']);
      }

    } else {
      localStorage.setItem("isUserLogin", "false");
      alert('Not Ok');
    }

  }

}

