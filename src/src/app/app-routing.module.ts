import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FlightsComponent } from './components/flights/flights.component';
import { PassengersComponent } from './components/passengers/passengers.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'passengers', component: PassengersComponent},
  {path: 'flights', component: FlightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
