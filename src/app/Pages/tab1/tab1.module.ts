import { IonicModule, IonText } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HeaderComponent } from '../../components/header/header.component'; 
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LessonsBarComponent } from 'src/app/components/lessons-bar/lessons-bar.component';
import { WeeklessonsbarComponent } from 'src/app/components/weeklessonsbar/weeklessonsbar.component';
import { DayviewComponent } from 'src/app/components/dayview/dayview.component';
import { WeekviewComponent } from 'src/app/components/weekview/weekview.component';
import { EffectsModule } from '@ngrx/effects';
import { ScheduledLessonsEffects } from 'src/app/scheduledlessons/effects/scheduledlessons.effects';
import { StoreModule } from '@ngrx/store';
import { scheduledLessonsReducer } from 'src/app/scheduledlessons/reducers/scheduledlessons.reducer';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
// import { CalendarModule } from 'ion2-calendar';
import { NgbDateStruct, NgbCalendar, NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
// import { DayviewComponent } from '../components/dayview/dayview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    // CalendarModule,
    Tab1PageRoutingModule,
    // CalendarModule,
    StoreModule.forFeature('scheduledlessons',scheduledLessonsReducer),
    EffectsModule.forFeature([ScheduledLessonsEffects]),
    SharedModule,
    NgbModule
  ],
  // entryComponents:[DayviewComponent],
  declarations: [Tab1Page,
    // HeaderComponent,
  ]
})
export class Tab1PageModule {}
