import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraySortPageRoutingModule } from './array-sort-routing.module';

import { ArraySortPage } from './array-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraySortPageRoutingModule
  ],
  declarations: [ArraySortPage]
})
export class ArraySortPageModule {}
