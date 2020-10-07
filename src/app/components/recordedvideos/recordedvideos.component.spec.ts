import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordedvideosComponent } from './recordedvideos.component';

describe('RecordedvideosComponent', () => {
  let component: RecordedvideosComponent;
  let fixture: ComponentFixture<RecordedvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordedvideosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
