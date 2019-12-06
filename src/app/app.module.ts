import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { DummyComponent } from './dummy/dummy.component';
import { NewDummyComponent } from './new-dummy/new-dummy.component';
import { TicketComponent } from './Tickets/ticket/ticket.component';
import { ShowTicketsComponent } from './Tickets/show-tickets/show-tickets.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DummyComponent,
    NewDummyComponent,
    TicketComponent,
    ShowTicketsComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
