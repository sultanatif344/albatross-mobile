import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    SharedModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
