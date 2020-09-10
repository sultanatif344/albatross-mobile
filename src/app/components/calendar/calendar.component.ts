import { Component, OnInit } from '@angular/core';
import { Calendar } from '@syncfusion/ej2-angular-calendars';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  constructor() { 
    let calendarObject = new Calendar();
  }

  ngOnInit() {}

  off() {
    document.getElementById("overlay").style.display = "none";
  }

}
