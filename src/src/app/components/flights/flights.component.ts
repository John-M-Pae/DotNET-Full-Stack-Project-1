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

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  getAllFlights(): void {
    this.flightService.getAll().subscribe(
      flgt => this.flights = flgt
    );
  }

}
