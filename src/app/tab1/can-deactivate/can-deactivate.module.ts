import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanDeactivatePageRoutingModule } from './can-deactivate-routing.module';

import { CanDeactivatePage } from './can-deactivate.page';
import { ScanPageGuard } from 'src/app/guard/scan.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanDeactivatePageRoutingModule
  ],
  declarations: [CanDeactivatePage],
  providers: [ScanPageGuard,]

})
export class CanDeactivatePageModule {}
