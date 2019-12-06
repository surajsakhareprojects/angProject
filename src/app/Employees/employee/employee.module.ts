import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{EmployeeApiService} from '../employee-api.service';
import{EmployeeRoutingModule} from 'src/app/employee-routing/employee-routing.module';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { GetDetailEmployeeComponent } from '../get-detail-employee/get-detail-employee.component';
import { GetEmployeeComponent } from '../get-employee/get-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    GetDetailEmployeeComponent,
    GetEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeApiService
  ]
})
export class EmployeeModule { }
