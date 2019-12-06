import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import{AuthGuardGuard} from './auth-guard.guard';
import { DummyComponent } from './dummy/dummy.component';
import { NewDummyComponent } from './new-dummy/new-dummy.component';
import { TicketComponent } from './Tickets/ticket/ticket.component';
import { ShowTicketsComponent } from './Tickets/show-tickets/show-tickets.component';







const routes: Routes = [
  {path:'ceo',
loadChildren : '../app/CEO/ceo/ceo.module#CeoModule',
canActivate:[AuthGuardGuard]},

{path:'manager',
loadChildren : '../app/Manager/manager/manager.module#ManagerModule',
canActivate:[AuthGuardGuard]},

{path:'developer',
loadChildren : '../app/Employees/employee/employee.module#EmployeeModule',
canActivate:[AuthGuardGuard]},


{path:'tester',
loadChildren : '../app/Tester/tester/tester.module#TesterModule',
canActivate:[AuthGuardGuard]},


{path:'login',component:LoginComponent},

{path:'register',component:RegisterComponent},

{path:'dummy',component:DummyComponent},

{path:'newdummy/:empId',component:NewDummyComponent},

{path:'ticket',component:TicketComponent,canActivate:[AuthGuardGuard]},

{path:'showtickets',component:ShowTicketsComponent,canActivate:[AuthGuardGuard]},

{path:'**',component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
