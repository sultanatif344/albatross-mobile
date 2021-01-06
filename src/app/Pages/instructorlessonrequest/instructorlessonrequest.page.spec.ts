import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructorlessonrequestPage } from './instructorlessonrequest.page';

describe('InstructorlessonrequestPage', () => {
  let component: InstructorlessonrequestPage;
  let fixture: ComponentFixture<InstructorlessonrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorlessonrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructorlessonrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
