import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserPage} from '../user/user';
import { RankingPage} from '../ranking/ranking';
import { SettingPage} from '../setting/setting';
import { AboutPage} from '../about/about';
/*
  Works as a Tab page 
*/
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  // set the root pages for each tab
  tab1Root: any = UserPage;
  tab2Root: any = RankingPage;
  tab3Root: any = SettingPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(public navParams: NavParams) {
     this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
