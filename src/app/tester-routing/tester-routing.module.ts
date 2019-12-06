import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllTesterComponent } from '../Tester/get-all-tester/get-all-tester.component';
import { AuthGuardGuard } from '../auth-guard.guard';
import { CreateTesterComponent } from '../Tester/create-tester/create-tester.component';
import { GetDetailTesterComponent } from '../Tester/get-detail-tester/get-detail-tester.component';
import { UpdateTesterComponent } from '../Tester/update-tester/update-tester.component';



const routes: Routes = [
{path:'',component:GetAllTesterComponent,canActivate:[AuthGuardGuard]},
{path:'createtester',component:CreateTesterComponent,canActivate:[AuthGuardGuard]},
{path:'getdetailtester/:id',component:GetDetailTesterComponent,canActivate:[AuthGuardGuard]},
{path:'updatetester/:id',component:UpdateTesterComponent,canActivate:[AuthGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
