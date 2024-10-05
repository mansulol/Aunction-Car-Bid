import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMybidsPage } from './tab-mybids.page';

const routes: Routes = [
  {
    path: '',
    component: TabMybidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMybidsPageRoutingModule {}
