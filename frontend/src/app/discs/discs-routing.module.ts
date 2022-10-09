import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscsPage } from './discs.page';

const routes: Routes = [
  {
    path: '',
    component: DiscsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscsPageRoutingModule {}
