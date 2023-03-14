import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { FullComponent } from './layouts/full/full.component';
// import { BlankComponent } from './layouts/blank/blank.component';
// import {LoginComponent } from './authentication/login/login.component';
// import { MainComponent } from './home/main/main.component';

export const Approutes: Routes = [
  {
    path: '',
    //
   // component: FullComponent,
    children: [
      // { path: '', redirectTo: '/starter', pathMatch: 'full' },
      { path: 'login', redirectTo: '/login', pathMatch: 'full' },
      //{ path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '', redirectTo: 'index.html', pathMatch: 'full' },
      {
        path: 'index.html',
        loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/starter'
  // }

  // {
  //   path:'login',
  //   //component:LoginComponent
  // },
  // {
  //   path:'home',
  //   //component:MainComponent
  // }
  {
    path: '**',
    redirectTo: '/starter'
  }
];
