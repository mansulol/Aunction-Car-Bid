import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-bids-tab3',
  templateUrl: './header-bids-tab3.component.html',
  styleUrls: ['./header-bids-tab3.component.scss'],
  imports: [IonHeader, IonTitle],
  standalone: true
})
export class HeaderBidsTab3Component {
  @Input() title: string = "";

  constructor(private router: Router) { }

  backToMeTab(){
    this.router.navigateByUrl("/tabs/tab3")
  }

}
