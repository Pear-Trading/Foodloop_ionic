import { Component } from '@angular/core';
import {ComponentFactoryResolver} from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';


/*
 This page represent a ranking page/leaderboard. 
 display players in leaderboard and highlight important information
*/
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  searchQuery: string = '';

  sampleUserData: any;
  listType = 'All';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams ,
    private toastCtrl: ToastController
  
  ) {
     this.fetchData();
  }

// create sample test data 
// to-do, initilize an API call to foodloop server to
// retrieve data regarding leaderboard
 fetchData(){
  var sampleUserData = (

      [
      {"username": "Dave Brookes","previousPos":1,"currentPos":1,"pearPoint":534.78,"retailerSpent":18,"receiptSubmitted":134,"firstStart":0},
      {"username": "Michael Hallam","previousPos":2,"currentPos":2,"pearPoint":333.18,"retailerSpent":12,"receiptSubmitted":34,"firstStart":0},
      {"username": "Anna Clayton","previousPos":3,"currentPos":3,"pearPoint":314.32,"retailerSpent":148,"receiptSubmitted":144,"firstStart":0},
      {"username": "Dawn Keyse","previousPos":7,"currentPos":4,"pearPoint":234.88,"retailerSpent":518,"receiptSubmitted":634,"firstStart":0},
      {"username": "Bob Steve","previousPos":4,"currentPos":5,"pearPoint":134.78,"retailerSpent":128,"receiptSubmitted":834,"firstStart":0},
      {"username": "John Smith","previousPos":0,"currentPos":6,"pearPoint":134.78,"retailerSpent":128,"receiptSubmitted":834,"firstStart":0},
      ]
    );
  this.sampleUserData = sampleUserData;
  console.log(this.sampleUserData);
 }

// dynamically changes the row style based on  player's position
// for instance, top three player and the player him/herself should
// be hightlighted 
getClass(item){
  if(item.currentPos<4)
  return "topThree";
  else if(item.currentPos==4)
  return "user";
  else 
  return "otherUsers";
}

// show changes by using icon, trending up and trending down or no trend. 
getIcon(item){
  if(item.currentPos<item.previousPos){
    return "md-trending-up";
  } else if(item.currentPos==item.previousPos){
    return "md-remove";
  }  else {
    return "md-trending-down";
  }
}  

getItems(ev: any) {
  
    let names = [];
    this.sampleUserData.forEach((name,index)=>{
      names.push(name.username);
    });
    let cpData = this.sampleUserData;
    alert(names);
    // set val to the value of the searchbar
    let val = ev.target.value;
    let result=[];

    if (val && val.trim() != '') {
     this.sampleUserData = names.filter((item) => {
       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })  

  }

  }

}
