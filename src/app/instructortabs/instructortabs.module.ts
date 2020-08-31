import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { InstructortabsPageRoutingModule } from '../instructortabs/instructortabs-routing.module';

import { InstructortabsPage } from './instructortabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // InstructortabsPageRoutingModule
  ],
  declarations: [InstructortabsPage]
})
export class InstructortabsPageModule {}
