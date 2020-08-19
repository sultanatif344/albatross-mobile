import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructortabsPage } from './instructortabs.page';

describe('InstructortabsPage', () => {
  let component: InstructortabsPage;
  let fixture: ComponentFixture<InstructortabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructortabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructortabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
