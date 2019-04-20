import { ProfileComponent } from './../profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { OptionsPageModule } from '../options/options.module';
import { OptionsPage } from '../options/options.page';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    OptionsPageModule
  ],
  declarations: [TabsPage, SettingsComponent, ProfileComponent]
})
export class TabsPageModule {}
