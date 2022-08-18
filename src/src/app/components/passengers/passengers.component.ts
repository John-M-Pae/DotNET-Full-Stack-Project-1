import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers?: Passenger[];

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void { }

  getAllNames(): void {
    this.passengerService.getAll().subscribe(
      pas => this.passengers = pas
    );
  }

  

}
