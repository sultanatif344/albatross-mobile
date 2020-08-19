import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module'
import { HeaderComponent } from 'src/app/components/header/header.component';
// import { EditprofilePage } from '../editprofile/editprofile.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page },
    // {path:'tab3/editprofile',component:EditprofilePage}
    
  ]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page,HeaderComponent]
})
export class Tab3PageModule {}
