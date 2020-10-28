import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url:string;
  header:HttpHeaders;
  constructor(private http:HttpClient) { }

  postReview(token:string,ratedTo:string,description:string):Observable<any>{
    this.url = 'https://albatross-v1.herokuapp.com/api/v1/review/addreview'
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token  
    })
    return this.http.post(this.url,{ratedTo:ratedTo,description:description},{headers:this.header});
  }
}
