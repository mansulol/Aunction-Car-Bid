import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSavesPage } from './tab-saves.page';

const routes: Routes = [
  {
    path: '',
    component: TabSavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSavesPageRoutingModule {}
