import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import { AlertController, ActionSheetController }  from 'ionic-angular';
import { Camera, Base64ToGallery, FilePath, Transfer, File } from 'ionic-native';
/*
  Generated class for the Receipt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var cordova: any;

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html'
})

// ideally this page allows player to submit a receipt along with 
// the key feature of uploading an image 
export class ReceiptPage {
  submitReceipt : FormGroup;
  public base64Image: string;

  constructor(
    private formBuilder:FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    public nav: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController  // alert screen for confirmation of receipt entries
    ) {
  
  // defines the form's entires and validation rules 
  this.submitReceipt = this.formBuilder.group({
    storename : [''],
    amount: [''],
    image : ['']
    
  });
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
  }

  confirmSumbit(){  
    console.log(this.submitReceipt.value);
    this.nav.pop(this);    // return to previous page 
  }

  submitReceiptForm(){
    console.log(this.submitReceipt.value);
    let confirm = this.alertCtrl.create({
      title: '',
      message : 'Confirm Entries ' + this.submitReceipt.value,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.confirmSumbit();
            console.log('Submit');
          }
        },
        {
          text: 'No',
          handler:() => {
            console.log('No');
          }

        }
      ]
    });
    // confirm.present();
  }

  uploadImage(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image from: ',
      buttons:[
        {
          text:'Take a pic',
          handler: () =>{
             this.takePicture();
          }
        },
        {
          text: 'Load from library ',
          handler:()=> {
            this.takePicture();
          }
        },
        {
          text:'Cancle',
          role:'canle'
        }
      ]
    });
    
    actionSheet.present();

  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
    }



  

}
