import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {

  public flag: boolean;
  public position:string;
  // @Output() onSignIn = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit() {
    this.flag = true;
    console.log(this.position);
  }

  switchToSignUp(){
    this.flag = false;
  }
  switchToSignIn(){
    this.flag = true;
  }

  navigateToDashboard(){
    if(this.position === 'Student' ){
      this.router.navigateByUrl('')
    }
    else if(this.position === 'Teacher'){
    this.router.navigateByUrl('instructortabs/Instructor-dashboard');
  }
}

  // navigateToWelcome(){
  //   this.onSignIn.emit(this.position);
  //   this.router.navigateByUrl('welcome');
  // }

  selectposition(position){
    console.log(position);
  }

}
