import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabSavesPageRoutingModule } from './tab-saves-routing.module';
import { TabSavesPage } from './tab-saves.page';

import { CardBidCarComponent } from '../components/card-bid-car/card-bid-car.component';
import { HeaderBidsTab3Component } from '../components/header-bids-tab3/header-bids-tab3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSavesPageRoutingModule,
    CardBidCarComponent,
    HeaderBidsTab3Component
  ],
  declarations: [TabSavesPage]
})
export class TabSavesPageModule {}
