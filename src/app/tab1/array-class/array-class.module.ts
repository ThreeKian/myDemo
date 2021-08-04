import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrayClassPageRoutingModule } from './array-class-routing.module';

import { ArrayClassPage } from './array-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrayClassPageRoutingModule
  ],
  declarations: [ArrayClassPage]
})
export class ArrayClassPageModule {}
