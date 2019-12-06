import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{ManagerService} from '../manager.service';
import { ManagerRoutingModule } from 'src/app/manager-routing/manager-routing.module';
import { CreateManagerComponent } from '../create-manager/create-manager.component';
import { GetDetailManagerComponent } from '../get-detail-manager/get-detail-manager.component';
import { GetManagerComponent } from '../get-manager/get-manager.component';
import { UpdateManagerComponent } from '../update-manager/update-manager.component';



@NgModule({
  declarations: [
    CreateManagerComponent,
    GetDetailManagerComponent,
    GetManagerComponent,
    UpdateManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerRoutingModule
  ],
  providers: [
    ManagerService
  ]
})
export class ManagerModule { }
