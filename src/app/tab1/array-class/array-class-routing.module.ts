import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayClassPage } from './array-class.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayClassPageRoutingModule {}
