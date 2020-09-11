import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.scss'],
})
export class WeekviewComponent implements OnInit {

  @Input() weekLessons:Array<Object>
  constructor() { }

  ngOnInit() {}

}
