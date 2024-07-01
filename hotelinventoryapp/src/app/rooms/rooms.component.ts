import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
toggle() {
  this.hideRooms = !this.hideRooms;
}
  hotelName = 'Hilton Grand';
  numberOfRooms = 10;
  hideRooms = false;
}

/* Methods to Bind component to HTML
1.Interpolation -> Basic data like date, string, number
2.Property Binding 
3.Event Binding
*/ 