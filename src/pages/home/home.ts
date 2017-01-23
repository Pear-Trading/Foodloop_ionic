/* this page defines the functionaility of the page such as */
/* when a button is pressed */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TokenPage} from '../token/token';

/* interface of home page*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  tokenPage = TokenPage;
  constructor(public navCtrl: NavController) {
    
  }

  
}
