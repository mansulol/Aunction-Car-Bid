import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-saves',
    loadChildren: () => import('./tab-saves/tab-saves.module').then( m => m.TabSavesPageModule)
  },
  {
    path: 'tab-mybids',
    loadChildren: () => import('./tab-mybids/tab-mybids.module').then( m => m.TabMybidsPageModule)
  },
  {
    path: 'add-bid',
    loadChildren: () => import('./add-bid/add-bid.module').then( m => m.AddBidPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
