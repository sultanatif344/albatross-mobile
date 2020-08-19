import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessondetailsPage } from './lessondetails.page';

describe('LessondetailsPage', () => {
  let component: LessondetailsPage;
  let fixture: ComponentFixture<LessondetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessondetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessondetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
