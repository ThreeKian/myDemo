import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataScreenPageRoutingModule } from './data-screen-routing.module';

import { DataScreenPage } from './data-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataScreenPageRoutingModule
  ],
  declarations: [DataScreenPage]
})
export class DataScreenPageModule {}
