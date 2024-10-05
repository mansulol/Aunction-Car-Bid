import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-saves',
  templateUrl: './tab-saves.page.html',
  styleUrls: ['./tab-saves.page.scss'],
})
export class TabSavesPage{

  constructor(private router: Router) { }

  backToMeTab(){
    this.router.navigateByUrl("/tabs/tab3")
  }

}
