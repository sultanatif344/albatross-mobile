import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RecommendationsComponent } from 'src/app/components/recommendations/recommendations.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { studentreducer } from 'src/app/studentstore/reducers/student.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from 'src/app/studentstore/effects/student.effects';
import {LoaderComponent} from '../../components/loader/loader.component'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    StoreModule.forFeature('student',studentreducer),
    EffectsModule.forFeature([StudentEffects]),
    SharedModule
  ],
  declarations: [Tab2Page,RecommendationsComponent],
  entryComponents:[LoaderComponent]
})
export class Tab2PageModule {}
