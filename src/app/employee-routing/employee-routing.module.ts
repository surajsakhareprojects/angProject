import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetEmployeeComponent } from '../Employees/get-employee/get-employee.component';
import { CreateEmployeeComponent } from '../Employees/create-employee/create-employee.component';
import { GetDetailEmployeeComponent } from '../Employees/get-detail-employee/get-detail-employee.component';
import { UpdateEmployeeComponent } from '../Employees/update-employee/update-employee.component';

const routes: Routes = [
{path:"",component:GetEmployeeComponent},
{path:"createemployee",component:CreateEmployeeComponent},
{path:"getdetailemployee/:id",component:GetDetailEmployeeComponent},
{path:"updateemployee/:id",component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
