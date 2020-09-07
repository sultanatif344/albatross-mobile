import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { EditInstructorProfileAction, EditInstructorProfileSuccessAction, EditInstructorProfileFailureAction } from 'src/app/Instructorstore/Actions/Instructor.actions';
import { Instructor } from 'src/app/models/instructor';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
// import { } from 'protractor';

@Component({
  selector: 'app-teacherfields',
  templateUrl: './teacherfields.component.html',
  styleUrls: ['./teacherfields.component.scss'],
})

export class TeacherfieldsComponent implements OnInit { 

  constructor(private EditProfileService:EditProfileService,private store:Store<AppState>) { }

  // @Output() nameEv=new EventEmitter<string>();
  // @Output() TimezoneEv=new EventEmitter<string>();
  // @Output() LanguageEv=new EventEmitter<string[]>();
  // @Output() DexterityEv=new EventEmitter<string[]>();
  // @Output() Type_of_lessons_offeredEv=new EventEmitter<string[]>();
  // @Output() DescriptionEv=new EventEmitter<string>();
  // @Output() AffiliationEv=new EventEmitter<string>();
  // @Output() RatesEv=new EventEmitter<string>();
  // @Output() TimeslotsEv=new EventEmitter<string[]>();
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
  public instructorDescription:Instructor;

  ngOnInit() {
    this.instructorDescription = {
      name:this.name,
      dexterity:this.dexterityArr,
      timeZone:this.timeZone,
      language:this.languageArr,
      typeOfLessonsOffered:this.type_of_lessons_offeredArr,
      description:this.description,
      courseAffiliation:this.affiliation,
      rate:Number(this.rates),
      availableTimeSlots:this.timeslots
    }
  }
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
    this.store.select<any>('users').subscribe(data=>{
      this.EditProfileService.EditProfile(this.instructorDescription,data.authState.user.token)
      .subscribe(data=>{
        this.store.dispatch(new EditInstructorProfileSuccessAction(data))
      })
      catchError(error=>of(new EditInstructorProfileFailureAction(error))) 
    })
  }



}
