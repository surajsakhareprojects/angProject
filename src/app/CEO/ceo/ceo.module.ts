import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CeoApiService } from '../ceo-api.service';
import { CeoRoutingModule } from 'src/app/ceo-routing/ceo-routing.module';
import { CreateCeoComponent } from '../create-ceo/create-ceo.component';
import { GetCeoComponent } from '../get-ceo/get-ceo.component';
import { GetDetailCeoComponent } from '../get-detail-ceo/get-detail-ceo.component';
import { UpadateCeoComponent } from '../upadate-ceo/upadate-ceo.component';

@NgModule({
  declarations: [
    CreateCeoComponent,
    GetCeoComponent,
    GetDetailCeoComponent,
    UpadateCeoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CeoRoutingModule
  ],
  providers: [
    CeoApiService
  ]
})
export class CeoModule { }



