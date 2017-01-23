import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
/*
  Generated class for the Token page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-token',
  templateUrl: 'token.html'
})
export class TokenPage {
  signupPage = SignupPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TokenPage');
  }

}
