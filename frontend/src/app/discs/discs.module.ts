import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscsPageRoutingModule } from './discs-routing.module';

import { DiscsPage } from './discs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscsPageRoutingModule
  ],
  declarations: [DiscsPage]
})
export class DiscsPageModule {}
