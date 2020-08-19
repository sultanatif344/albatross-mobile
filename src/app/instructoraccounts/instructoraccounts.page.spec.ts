import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructoraccountsPage } from './instructoraccounts.page';

describe('InstructoraccountsPage', () => {
  let component: InstructoraccountsPage;
  let fixture: ComponentFixture<InstructoraccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructoraccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructoraccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
