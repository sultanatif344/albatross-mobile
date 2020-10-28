import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-recordedlectures',
  templateUrl: './recordedlectures.page.html',
  styleUrls: ['./recordedlectures.page.scss'],
})
export class RecordedlecturesPage implements OnInit {

  constructor(private fileService:FileSaverService) { }

  title:string;
  ngOnInit() {
    this.title = "Recordings";
  }

  onSave(event){
    var blob = new Blob([event.VideoLink],{type:'video/mp4'})
    this.fileService.save(blob,event.VideoId);
  }

}
