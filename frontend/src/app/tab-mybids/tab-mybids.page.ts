import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-mybids',
  templateUrl: './tab-mybids.page.html',
  styleUrls: ['./tab-mybids.page.scss']
})
export class TabMybidsPage {

  constructor(private router: Router) { }

  backToMeTab(){
    this.router.navigateByUrl("/tabs/tab3")
  }

  toAddPage(){
    this.router.navigateByUrl("/add-bid")
  }

}
