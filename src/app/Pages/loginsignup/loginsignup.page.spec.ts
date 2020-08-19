import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginsignupPage } from './loginsignup.page';

describe('LoginsignupPage', () => {
  let component: LoginsignupPage;
  let fixture: ComponentFixture<LoginsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
