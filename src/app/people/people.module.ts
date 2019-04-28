import { CallNumber } from '@ionic-native/call-number';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


import { IonicModule } from '@ionic/angular';

import { PeoplePage } from './people.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeoplePage],
  providers:[
    CallNumber,
    Contact
  ]
})
export class PeoplePageModule {}
