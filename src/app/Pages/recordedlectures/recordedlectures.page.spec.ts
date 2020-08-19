import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordedlecturesPage } from './recordedlectures.page';

describe('RecordedlecturesPage', () => {
  let component: RecordedlecturesPage;
  let fixture: ComponentFixture<RecordedlecturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordedlecturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordedlecturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
