import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CardBidCarComponent } from '../components/card-bid-car/card-bid-car.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NavbarComponent,
    CardBidCarComponent,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
