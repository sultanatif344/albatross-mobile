import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }
  public position:string;
  ngOnInit() {
    
  }

  setPosition(event){
    this.position = event;
    console.log(this.position);
  }
  navigateToDashboard(){
    this.router.navigateByUrl('');
  }
  // navigateToDashboard(){
  //   if(this.position === 'Student' ){
  //     this.router.navigateByUrl('')
  //   }
  //   else if(this.position === 'Teacher'){
  //   this.router.navigateByUrl('Instructortabs/instructor-dashboard');
  // }
  // }

}
