import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guards/is-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./components/pages/cpanel/cpanel.module').then(m => m.CpanelModule),
    canActivate: [IsAuthGuard]
  },
  {
    path: 'descargas',
    loadChildren: () => import('./components/pages/downloads/downloads.module').then(m => m.DownloadsModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
