import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosurePage } from './closure.page';

const routes: Routes = [
  {
    path: '',
    component: ClosurePage
  },
  {
    path: 'callback',
    loadChildren: () => import('./callback/callback.module').then( m => m.CallbackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosurePageRoutingModule {}
