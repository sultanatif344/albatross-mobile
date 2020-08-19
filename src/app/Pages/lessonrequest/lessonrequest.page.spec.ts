import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonrequestPage } from './lessonrequest.page';

describe('LessonrequestPage', () => {
  let component: LessonrequestPage;
  let fixture: ComponentFixture<LessonrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
