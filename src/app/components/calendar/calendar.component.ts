import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { Calendar } from '@syncfusion/ej2-angular-calendars';
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {}

=======
  constructor() { 
    let calendarObject = new Calendar();
  }

  ngOnInit() {}

  off() {
    document.getElementById("overlay").style.display = "none";
  }

>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
}
