import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OptionsPage } from './options.page';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsPage,
    // children: [
    //   {
    //     path: 'settings',
    //     component: SettingsComponent
    //   },
    //   {
    //     path: 'profile',
    //     component: ProfileComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OptionsPage],
  entryComponents: [
    OptionsPage
  ]
})
export class OptionsPageModule {}
