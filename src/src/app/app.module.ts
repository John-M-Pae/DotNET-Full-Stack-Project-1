import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PassengersComponent } from './components/passengers/passengers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { SubmitPassengerComponent } from './components/submit-passenger/submit-passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    FlightsComponent,
    SubmitPassengerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
