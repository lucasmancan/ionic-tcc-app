import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      {
        path: 'extrato',
        children: [
          {
            path: '',
            loadChildren: '../sales/sales.module#SalesPageModule'
          }
        ]
      },
      {
        path: 'gestao',
        children: [
          {
            path: '',
            loadChildren: '../learning/learning.module#LearningPageModule'
          }
        ]
      },
      // {
      //   path: 'pessoas',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../people/people.module#PeoplePageModule'
      //     }
      //   ]
      // },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        // component: SettingsComponent
        component: ProfileComponent

      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'sales/list',
        children: [
          {
            path: '',
            loadChildren: '../sales/sales.module#SalesPageModule'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
