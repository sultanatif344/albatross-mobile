import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: 'app-studentfields',
  templateUrl: './studentfields.component.html',
  styleUrls: ['./studentfields.component.scss'],
})
export class StudentfieldsComponent implements OnInit {
  public name:string;
  public timeZone:string;
  public language:string;
  public handicap:string;
  public areasOfFocus:string;
  public languageArr:Array<string>=[];
  public areasOfFocusArr: Array<string>=[];
  private studentDescription:Object;
  private selectedfile:File = null;
  public image_source:string;
  constructor(private EditProfileService:EditProfileService,private auth:AuthService,private http:HttpClient ) {
    this.image_source = this.auth.getUser().photo;
   }

  ngOnInit() {}


  AddLanguage(language:string){
    this.languageArr.push(language);
  }

  AddAreasOfFocus(areasOfFocus:string){
    this.areasOfFocusArr.push(areasOfFocus);
  }

  onFileSelected(event){
    this.selectedfile = <File> event.target.files[0];
  }

  UploadImageAndUpdateProfile(){
    this.UploadFile();
    this.UpdateProfile();
  }

  UploadFile(){
    let headers = new HttpHeaders();
      headers = headers
        .set('Content-Type','multipart/form-data')
        .set('Authorization','Bearer '+this.auth.getToken());
      const fd = new FormData();
      fd.append('file',this.selectedfile)
      return this.http.post('https://albatross-v1.herokuapp.com/api/v1/user/photo',fd)
      .subscribe((res:any) =>{
        this.image_source = res.url;
      })
  }

  UpdateProfile(){
    this.studentDescription = {
      user:{
      name:this.name,
      timeZone:this.timeZone,
      dexterity:this.areasOfFocusArr,
      language:this.languageArr,
      }
    }
      this.EditProfileService.EditStudentProfile(this.studentDescription,this.auth.getToken())
      .subscribe(data=>{
        return data;
      })
    
  }

}
