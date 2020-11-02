import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-verficationform',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {

  public email:string;
  public digits={
    digit1:'',
    digit2:'',
    digit3:'',
    digit4:''
  }
  public resetPassword:boolean;
  @Output() verficationSuceededEvent = new EventEmitter<boolean>();
  @Output() emailSent =  new EventEmitter<string>();
  constructor(private forgetPasswordService:ForgetpasswordService) { }

  ngOnInit() {}


  getCode(email:string){
    this.forgetPasswordService.getCode(email).subscribe((data)=>{
      console.log(data);
    })
  }

  verifyCode(digits:any,email:string){
    var code:string = digits.digit1+''+digits.digit2+''+digits.digit3+''+digits.digit4;
    this.forgetPasswordService.verifyresetCode(email,code).subscribe((data)=>{
      console.log(data);
      this.resetPassword = true
      this.verficationSuceededEvent.emit(this.resetPassword);
      this.emailSent.emit(email);
    })
  }
}
