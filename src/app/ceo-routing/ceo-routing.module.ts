import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDetailCeoComponent } from '../CEO/get-detail-ceo/get-detail-ceo.component';
import { GetCeoComponent } from '../CEO/get-ceo/get-ceo.component';
import { CreateCeoComponent } from '../CEO/create-ceo/create-ceo.component';
import { UpadateCeoComponent } from '../CEO/upadate-ceo/upadate-ceo.component';


const routes: Routes = [
  {path:"",component:GetCeoComponent},
  {path:"createceo",component:CreateCeoComponent},
  {path:"getdetailceo/:id",component:GetDetailCeoComponent},
  {path:"updateceo/:id",component:UpadateCeoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeoRoutingModule { }
