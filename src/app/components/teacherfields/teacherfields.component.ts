import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { EditInstructorProfileAction, EditInstructorProfileSuccessAction, EditInstructorProfileFailureAction } from 'src/app/Instructorstore/Actions/Instructor.actions';
import { Instructor } from 'src/app/models/instructor';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { } from 'protractor';

@Component({
  selector: 'app-teacherfields',
  templateUrl: './teacherfields.component.html',
  styleUrls: ['./teacherfields.component.scss'],
})

export class TeacherfieldsComponent implements OnInit { 


  public name:string;
  public timeZone:string;
  public language:string;
  public languageArr:Array<string>=[];
  public dexterity:string;
  public dexterityArr:Array<string>=[];
  public type_of_lessons_offered:string;
  public type_of_lessons_offeredArr:Array<string>=[];
  public description:string;
  public affiliation:string;
  public rates:string;
  public slots:string;
  public timeslots:Array<string>=[];
  public instructorDescription:any;
  private selectedfile:File = null;
  public image_source:string;
  constructor(private EditProfileService:EditProfileService,private store:Store<AppState>, private auth:AuthService, private http:HttpClient) { 
    this.image_source = this.auth.getUser().photo;
  }
 

  ngOnInit() {
    this.store.select(store=>store).subscribe(data=>{
      return data;
    })
  }

  onFileSelected(event){
    this.selectedfile = <File> event.target.files[0];
  }

  UploadImageAndUpdateProfile(){
    this.UploadFile();
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

  AddLessons(dexterity:string){
    this.dexterityArr.push(dexterity);

  }

  AddLanguage(language:string){
    this.languageArr.push(language);
  }

  AddTypesOfLessonsOffered(typeOfLessonsOffered:string){
    this.type_of_lessons_offeredArr.push(typeOfLessonsOffered);
  }

  AddAvailableTimeSlots(timeSlots:string){
    this.timeslots.push(timeSlots);
  }
  UpdateProfile(){
    this.instructorDescription = {
      user:{
      name:this.name,
      timeZone:this.timeZone,
      dexterity:this.dexterityArr,
      language:this.languageArr,
      typeOfLessonsOffered:this.type_of_lessons_offeredArr,
      availableTimeSlots:this.timeslots,
      description:this.description,
      courseAffiliation:this.affiliation,
      rate:parseInt(this.rates)
      }
    }
    this.store.select<any>('users').subscribe(data=>{})
      this.EditProfileService.EditTeacherProfile(this.instructorDescription,this.auth.getToken())
      .subscribe(data=>{
        this.store.dispatch(new EditInstructorProfileSuccessAction(data))
      })
      catchError(error=>of(new EditInstructorProfileFailureAction(error))) 
    
  }



}
