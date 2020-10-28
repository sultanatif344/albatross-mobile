import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.scss'],
})
export class WeekviewComponent implements OnInit {

  @Input() weekLessons:Array<Object>
  public user:string;
  constructor(private auth:AuthService) {
    this.user = this.auth.getUser().role;
   }

  ngOnInit() {
   
    console.log(this.weekLessons);
    console.log(this.user);
  }

}
