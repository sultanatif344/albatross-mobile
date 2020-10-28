import { Component, Input, OnInit } from '@angular/core';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  public title:string;
  public resetPasswordComponentActive:boolean;
  constructor() {
    this.title = 'Verification';
    this.resetPasswordComponentActive = false;
   }

  ngOnInit() {
  }

  resetPasswordActive(event){
    this.resetPasswordComponentActive = event;
  }




}
