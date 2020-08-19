import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructorlessonrequest',
  templateUrl: './instructorlessonrequest.page.html',
  styleUrls: ['./instructorlessonrequest.page.scss'],
})
export class InstructorlessonrequestPage implements OnInit {

  constructor() { }

  title:string;
  ngOnInit() {
    this.title = "Your Requests"
  }

}
