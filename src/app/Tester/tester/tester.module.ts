import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{TesterServiceService} from '../tester-service.service';
import{TesterRoutingModule} from '../../tester-routing/tester-routing.module';
import{CreateTesterComponent} from '../create-tester/create-tester.component';
import { GetAllTesterComponent } from '../get-all-tester/get-all-tester.component';
import { GetDetailTesterComponent } from '../get-detail-tester/get-detail-tester.component';
import { UpdateTesterComponent } from '../update-tester/update-tester.component';

@NgModule({
  declarations: [
    CreateTesterComponent,
    GetAllTesterComponent,
    GetDetailTesterComponent,
    UpdateTesterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TesterRoutingModule
  ],
  providers: [
    TesterServiceService
  ]
})
export class TesterModule { }
