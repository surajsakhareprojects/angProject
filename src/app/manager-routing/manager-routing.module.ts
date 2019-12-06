import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetManagerComponent } from '../Manager/get-manager/get-manager.component';
import { CreateManagerComponent } from '../Manager/create-manager/create-manager.component';
import { GetDetailManagerComponent } from '../Manager/get-detail-manager/get-detail-manager.component';
import { UpdateManagerComponent } from '../Manager/update-manager/update-manager.component';
import { AuthGuardGuard } from '../auth-guard.guard';


const routes: Routes = [
{path:'',component:GetManagerComponent,canActivate:[AuthGuardGuard]},
{path:'createmanager',component:CreateManagerComponent,canActivate:[AuthGuardGuard]},
{path:'getdetailmanager/:id',component:GetDetailManagerComponent,canActivate:[AuthGuardGuard]},
{path:'updatemanager/:id',component:UpdateManagerComponent,canActivate:[AuthGuardGuard]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
