import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdategroupPage } from './updategroup.page';

const routes: Routes = [
  {
    path: '',
    component: UpdategroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdategroupPageRoutingModule {}
