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
  @Input() email: string;
  ngOnInit() {
  }


  ChangePassword(){
    if(this.verificationActive === false){
      this.ChangePasswordService.UpdatePassword(
      {currentPassword:this.currentPassword,newPassword:this.newPassword},this.auth.getToken())
      .subscribe(data=>{
        return data;
      })
    }
    else{
      this.forgetPasswordService.updatePasswordAfterCodeReset(this.newPassword,this.email)
      .subscribe((data)=>{
        return data;
      })
    }
}

}
