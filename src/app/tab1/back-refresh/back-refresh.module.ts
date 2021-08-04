import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackRefreshPageRoutingModule } from './back-refresh-routing.module';

import { BackRefreshPage } from './back-refresh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackRefreshPageRoutingModule
  ],
  declarations: [BackRefreshPage]
})
export class BackRefreshPageModule {}
