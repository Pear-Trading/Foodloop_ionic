import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder,FormGroup } from '@angular/forms'; // angular js 2 form dependency
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',  
})

export class SignupPage {
  signup: FormGroup;
  constructor(private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
      /* Specifying the sign up form and validation setting */
      this.signup = this.formBuilder.group({
      username:['',Validators.required],
      name:[''],
      age:[''],
      email:[''],
      postcode:[''],
      gender:[''],
      shoppingType:[''],
      newPassword:[''],
      passwordConfirmation:[''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupForm(){
    console.log(this.signup.value);
  }
}
