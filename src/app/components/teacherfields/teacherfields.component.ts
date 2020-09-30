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
  constructor(private EditProfileService:EditProfileService,private store:Store<AppState>, private auth:AuthService, private http:HttpClient) { }

  // @Output() nameEv=new EventEmitter<string>();
  // @Output() TimezoneEv=new EventEmitter<string>();
  // @Output() LanguageEv=new EventEmitter<string[]>();
  // @Output() DexterityEv=new EventEmitter<string[]>();
  // @Output() Type_of_lessons_offeredEv=new EventEmitter<string[]>();
  // @Output() DescriptionEv=new EventEmitter<string>();
  // @Output() AffiliationEv=new EventEmitter<string>();
  // @Output() RatesEv=new EventEmitter<string>();
  // @Output() TimeslotsEv=new EventEmitter<string[]>();
 

  ngOnInit() {
    this.store.select(store=>store).subscribe(data=>{
      console.log(data)
    })

    
  }

  onFileSelected(event){
    this.selectedfile = <File> event.target.files[0];
      console.log(event)
  }

  UploadImageAndUpdateProfile(){
    this.UploadFile();
    // this.UpdateProfile();
  }

  UploadFile(){
  //   const headers = new HttpHeaders( {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer '+this.auth.getToken(),                    
  //     'Access-Control-Allow-Origin': 'https://albatross-v1.herokuapp.com/api/v1/user/photo',
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE',
  //     'Access-Control-Allow-Headers':  'X-Requested-With,content-type'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  // })
  let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type','multipart/form-data')
      .set('Authorization','Bearer '+this.auth.getToken());
      //.set('Accept', '');
  // headers_object.append('Content-Type','application/json');
  // headers_object.append('Authorization-Bearer',this.auth.getToken());
  // headers_object.append('Access-Control-Allow-Origin','https://albatross-v1.herokuapp.com/api/v1/user/photo');
  // headers_object.append('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
  // headers_object.append('Access-Control-Allow-Headers','X-Requested-With,content-type')

  console.log(this.auth.getToken());
  // const httpOptions = {
  //   headers:headers
  // }
  console.log(this.selectedfile);
    const fd = new FormData();
    console.log(this.selectedfile);
    fd.append('file',this.selectedfile)
    console.log(fd);
    // this.http.get("https://albatross-v1.herokuapp.com/api/v1/instructor", {headers: headers}).subscribe(r=>console.log(r));
    return this.http.post('https://albatross-v1.herokuapp.com/api/v1/user/photo',fd)
    .subscribe((res:any) =>{
      this.image_source = res.url;
    })
  }
  // /api/v1/instructor/:id
  // ngOnChanges(){
  //   console.log(this.instructorDescription)
  // }

  // EmitName(){
  //   this.nameEv.emit(this.name);
  // }
  // EmitTimezone(){
  //   this.TimezoneEv.emit(this.timeZone);
  // }
  // EmitLangauge(){
  //   this.LanguageEv.emit(this.language);
  // }
  // EmitDexterity(){
  //   this.DexterityEv.emit(this.dexterity);
  // }
  // EmitTypeofLessons(){
  //   this.Type_of_lessons_offeredEv.emit(this.type_of_lessons_offered);
  // }
  // EmitDescription(){
  //   this.DescriptionEv.emit(this.description);
  // }
  // Emitaffiliation(){
  //   this.AffiliationEv.emit(this.affiliation);
  // }
  // EmitRates(){
  //   this.RatesEv.emit(this.rates);
  // }
  // EmitTimeslots(){
  //   this.TimeslotsEv.emit(this.timeslots);
  // }


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
    console.log(this.name);
    console.log(this.instructorDescription);
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
        console.log(data);
        this.store.dispatch(new EditInstructorProfileSuccessAction(data))
      })
      catchError(error=>of(new EditInstructorProfileFailureAction(error))) 
    
  }



}
