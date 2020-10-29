import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.scss'],
})
export class WeekviewComponent implements OnInit {

  @Input() weekLessons:Array<any>
  public user:string;
  id: string;
  constructor(private auth:AuthService,private router:Router) {
    this.user = this.auth.getUser().role;
   }

  ngOnInit() {
   
    console.log(this.weekLessons);
    console.log(this.user);
  }


  goToLessonRequest(event){
    this.id = event._id
    console.log(this.id);    
    this.router.navigateByUrl(`/lessondetails/${this.id}`);
  }

}
