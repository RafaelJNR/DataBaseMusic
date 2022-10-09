import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'discs',
    loadChildren: () => import('./discs/discs.module').then( m => m.DiscsPageModule)
  },
  {
    path: 'creategroup',
    loadChildren: () => import('./creategroup/creategroup.module').then( m => m.CreategroupPageModule)
  },
  {
    path: 'updategroup/:id',
    loadChildren: () => import('./updategroup/updategroup.module').then( m => m.UpdategroupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
