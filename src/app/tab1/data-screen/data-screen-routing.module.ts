import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataScreenPage } from './data-screen.page';

const routes: Routes = [
  {
    path: '',
    component: DataScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataScreenPageRoutingModule {}
