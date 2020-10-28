import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeletonscreen',
  templateUrl: './skeletonscreen.component.html',
  styleUrls: ['./skeletonscreen.component.scss'],
})
export class SkeletonscreenComponent implements OnInit {

  constructor() { }

  @Input() data:any;
  fakeData: Array<any> = [{}];
  ngOnInit() {
    this.fakeData = this.data;
  }

}
