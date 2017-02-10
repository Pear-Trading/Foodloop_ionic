/* this page defines the functionaility of the page such as */
/* when a button is pressed */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenPage} from '../token/token';
import { IndexPage} from '../index/index';
import { MenuController } from 'ionic-angular'; // navigation bar dependency
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';
/* interface of home page*/
@Component({
  templateUrl: 'login.html',
  providers: [UserData]  
})


export class LoginPage {


  public username;
  private password; 
  tokenPage = TokenPage;
  indexPage = IndexPage;


  constructor(public userData: UserData,public navCtrl: NavController,public menu: MenuController) {

  }



 
  signin() {
   this.userData.login(this.username);
    // navigate to the new page if it is not the current page
    // alternative, we can push this into the stack so user can return to previous page
    this.navCtrl.setRoot(this.indexPage);
  }

}
