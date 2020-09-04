import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module'
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
// import { EditprofilePage } from '../editprofile/editprofile.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    // ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page },
    
    // {path:'tab3/editprofile',component:EditprofilePage}
    
  ]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
