import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
/*
  this ts file handles the user-data, including login, logout event 
  user-data management by storing data in the local storage 
  other pages can import this page and call method to retrieve user-data 
  such as getUsername()
*/
@Injectable()
export class UserData {
  
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(
    public events: Events,
    public storage: Storage
  ) {
    this.init();
  }
  
  /* Internal database for user testing, handles login, logoff and retrieves user-data */
  /* */
  
  /* init firebase for tetsing */ 
   init() {
        const fbConf = {
          apiKey: "AIzaSyDypwjmMD818GQTTfyhTpx76ChJpDsZGek",
          authDomain: "foodloop-666db.firebaseapp.com",
          databaseURL: "https://foodloop-666db.firebaseio.com",
          storageBucket: "foodloop-666db.appspot.com",
          messagingSenderId: "832579459759"
        };

        firebase.initializeApp(fbConf);
    }
  
  /* Login and log out events ****/
  login(username: string ){
    this.storage.set(this.HAS_LOGGED_IN,true);
    this.setUsername(username);
    this.events.publish('user:login')
  } 
  signup(username: string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };
  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };
  /* Login and log out events end ****/

  /* Storage management and data access method */ 
  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  setUsername(username: string) {
    this.storage.set('username', username);
  };

  setUserToken(token: string){
    this.storage.set('usertoken',token);
  }

  getUserToken(){
    return this.storage.get('usertoken').then((value) => {
      return value;
    });
  }
  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
  /* Storage management and data access method end */ 

}
