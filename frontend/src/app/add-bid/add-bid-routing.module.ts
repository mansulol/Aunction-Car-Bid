import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBidPage } from './add-bid.page';

const routes: Routes = [
  {
    path: '',
    component: AddBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBidPageRoutingModule {}
