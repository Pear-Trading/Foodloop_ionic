import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams , App , Slides} from 'ionic-angular';
import {ReceiptPage} from '../receipt/receipt';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {IndexPage} from '../index/index';
import {OverviewPage} from '../overview/overview';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { PeopleService} from '../../providers/people-service';

/*
  this page is created for navigating user through differnet feature of the app
  as the development goes, more features can be added to this page
  quite similiar to a index page 
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [PeopleService]
})
export class UserPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild(Slides) slides: Slides;

  //  varibels for displaying welcome message board
  public status: any;
  lineChart: any;
  barChart: any;
  pieChart: any;
  public userDisplayName; 
  public receiptPage;

  constructor(
    private  app : App,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public peopleService: PeopleService,
  ) {
    this.receiptPage = ReceiptPage;
    this.status = "Daily"; // defualt chart is Daily
  } 
  
 ionViewDidLoad() {
   this.initCharts();
 }

  addReceipt(){
    this.navCtrl.push(ReceiptPage);
  }

  overview(){
    this.navCtrl.push(OverviewPage);
  }



/*********************** --  Data representation part -- **************************/
  /* including calling provider whihc calls api to retrieve user data */
  /* navigation and respresentation of the retrieved data */

  initCharts(){
  
    this.lineChart = new Chart(this.lineCanvas.nativeElement,this.peopleService.getChartData("Daily"));
    this.barChart = new Chart(this.barCanvas.nativeElement,this.peopleService.getChartData("Monthly"));
    this.pieChart = new Chart(this.pieCanvas.nativeElement,this.peopleService.getChartData("Weekly"));
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
    switch(currentIndex){
      case 0:
        this.status = "Daily";
        break;  
      case 1: 
        this.status = "Weekly";
        break;
      case 2: 
        this.status = "Monthly";
        break;
    }
  }

  goToSlide(index) {
    this.slides.slideTo(index, 500);
  }

}
