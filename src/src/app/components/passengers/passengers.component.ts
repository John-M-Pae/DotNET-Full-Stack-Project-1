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
  selected?: Passenger;

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void { }

  focusOn(pas: Passenger): void {
    if (pas.id === this.selected?.id) {
      this.selected = undefined;
    }
    else {
      this.selected = pas;
    }
    console.log(this.selected);
  }

  getAllNames(): void {
    this.passengerService.getAll().subscribe(
      pas => this.passengers = pas
    );
  }

  removePassenger(id: number): void {
    this.passengerService.removePassenger(id).subscribe();
  }

}
