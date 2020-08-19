import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HeaderComponent } from '../../components/header/header.component'; 
import { Tab1PageRoutingModule } from './tab1-routing.module';
// import { DayviewComponent } from '../components/dayview/dayview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    
  ],
  // entryComponents:[DayviewComponent],
  declarations: [Tab1Page,HeaderComponent]
})
export class Tab1PageModule {}
