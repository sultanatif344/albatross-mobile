import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructorlessondetailsPage } from './instructorlessondetails.page';

describe('InstructorlessondetailsPage', () => {
  let component: InstructorlessondetailsPage;
  let fixture: ComponentFixture<InstructorlessondetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorlessondetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructorlessondetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
