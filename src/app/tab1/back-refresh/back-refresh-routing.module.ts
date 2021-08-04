import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackRefreshPage } from './back-refresh.page';

const routes: Routes = [
  {
    path: '',
    component: BackRefreshPage
  },
  {
    path: 'next-page',
    loadChildren: () => import('./next-page/next-page.module').then( m => m.NextPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackRefreshPageRoutingModule {}
