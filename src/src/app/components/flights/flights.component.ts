import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights?: Flight[];
  selected?: Flight;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  focusOn(flgt: Flight):void {
    if (flgt.id === this.selected?.id) {
      this.selected = undefined;
    }
    else {
      this.selected = flgt;
    }
  }

  getAllFlights(): void {
    this.flightService.getAll().subscribe(
      flgt => this.flights = flgt
    );
  }

}
