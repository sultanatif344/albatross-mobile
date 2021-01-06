import { tokenReference } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviewpopup',
  templateUrl: './reviewpopup.component.html',
  styleUrls: ['./reviewpopup.component.scss'],
})
export class ReviewpopupComponent implements OnInit {

  public review:string;
  @Input() userId:string;
  @Output()reviewFinishedEvent = new EventEmitter<boolean>();
  popEnabled:boolean;
  constructor(private reviewService:ReviewService,private auth:AuthService) { }

  ngOnInit() {
  }


  postReview(){
    this.reviewService.postReview(this.auth.getToken(),this.userId,this.review).subscribe((data)=>{
    });
    this.popEnabled = false;
    this.reviewFinishedEvent.emit(this.popEnabled);
  }
}
