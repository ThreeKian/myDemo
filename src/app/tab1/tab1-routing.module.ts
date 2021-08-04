import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ScanPageGuard } from '../guard/scan.guard';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'my-calendar',
    loadChildren: () => import('./my-calendar/my-calendar.module').then( m => m.MyCalendarPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'array-class',
    loadChildren: () => import('./array-class/array-class.module').then( m => m.ArrayClassPageModule)
  },
  {
    path: 'array-sort',
    loadChildren: () => import('./array-sort/array-sort.module').then( m => m.ArraySortPageModule)
  },
  {
    path: 'back-refresh',
    loadChildren: () => import('./back-refresh/back-refresh.module').then( m => m.BackRefreshPageModule)
  },
  {
    path: 'closure',
    loadChildren: () => import('./closure/closure.module').then( m => m.ClosurePageModule)
  },
  {
    path: 'can-deactivate',
    loadChildren: () => import('./can-deactivate/can-deactivate.module').then( m => m.CanDeactivatePageModule)
  },
  {
    path: 'data-screen',
    loadChildren: () => import('./data-screen/data-screen.module').then( m => m.DataScreenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
