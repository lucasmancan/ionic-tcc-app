import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';
import { SaleComponent } from '../sale/sale.component';
import { SearchFilterPage } from '../search-filter/search-filter.page';
import { SearchFilterPageModule } from '../search-filter/search-filter.module';

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  },
  {
    path: 'sale/:id',
    component: SaleComponent
  },
  {
    path: 'sale/',
    component: SaleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesPage, SaleComponent]
})
export class SalesPageModule {}
