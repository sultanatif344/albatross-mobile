import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http:HttpClient) { }

  private editProfileInstructor_URL = 'https://albatross-v1.herokuapp.com/api/v1/instructor/editprofile'
  private editProfileStudent_URL = 'https://albatross-v1.herokuapp.com/api/v1/student/editprofile'

  EditTeacherProfile(teacherFields:Instructor,token:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })    
    return this.http.put(this.editProfileInstructor_URL,teacherFields,{headers:headers})
  }

  EditStudentProfile(studentFields:Object,token:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })    
    return this.http.put(this.editProfileStudent_URL,studentFields,{headers:headers})
  }
}
