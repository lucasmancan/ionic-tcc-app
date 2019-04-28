import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LearningPage } from './learning.page';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  {
    path: '',
    component: LearningPage
  },
  {
    path:':id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LearningPage, ArticleComponent]
})
export class LearningPageModule {}
