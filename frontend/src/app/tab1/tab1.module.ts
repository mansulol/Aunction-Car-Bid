import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { CardCarruselComponent } from '../components/card-carrusel/card-carrusel.component';
import { SimpleCardComponent } from '../components/simple-card/simple-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    NavbarComponent,
    CardCarruselComponent,
    SimpleCardComponent
],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
