import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { TutorialGuard } from './guards/tutorial.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule'},
  { path: 'options', loadChildren: './options/options.module#OptionsPageModule' , canActivate: [AuthGuard]},
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule', canActivate: [TutorialGuard]   },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule', canActivate: [TutorialGuard]  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,
       { preloadingStrategy: PreloadAllModules }), IonicStorageModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
