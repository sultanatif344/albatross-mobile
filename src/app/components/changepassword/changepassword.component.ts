import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChangepasswordService } from 'src/app/services/changepassword.service';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-changepasswordform',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {

  constructor(private ChangePasswordService:ChangepasswordService,private auth:AuthService, private forgetPasswordService:ForgetpasswordService) { }


  public currentPassword:string;
  public newPassword:string;
  @Input() verificationActive:boolean;
  ngOnInit() {
    console.log(this.verificationActive);
  }


  ChangePassword(){
    if(this.verificationActive === false){
      this.ChangePasswordService.UpdatePassword(
      {currentPassword:this.currentPassword,newPassword:this.newPassword},this.auth.getToken())
      .subscribe(data=>{
        console.log(data);
      })
    }
    else{
      this.forgetPasswordService.updatePasswordAfterCodeReset(this.newPassword)
      .subscribe((data)=>{
        console.log(data);
      })
    }
}

}
