import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivatePage } from './can-deactivate.page';
import { ScanPageGuard } from 'src/app/guard/scan.guard';

const routes: Routes = [
  {
    path: '',
    component: CanDeactivatePage,
    canDeactivate:[ScanPageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanDeactivatePageRoutingModule {}
