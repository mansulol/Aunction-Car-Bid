import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMybidsPage } from './tab-mybids.page';

import { TabMybidsPageRoutingModule } from './tab-mybids-routing.module';
import { CardBidCarComponent } from '../components/card-bid-car/card-bid-car.component';
import { HeaderBidsTab3Component } from '../components/header-bids-tab3/header-bids-tab3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMybidsPageRoutingModule,
    CardBidCarComponent,
    HeaderBidsTab3Component
  ],
  declarations: [TabMybidsPage]
})
export class TabMybidsPageModule {}
