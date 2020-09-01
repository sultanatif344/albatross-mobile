import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { ScheduledLessonsEffects } from 'src/app/scheduledlessons/effects/scheduledlessons.effects';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    StoreModule.forFeature('users',reducers),
    EffectsModule.forFeature([ScheduledLessonsEffects])
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
