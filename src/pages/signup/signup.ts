import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleService} from '../../providers/people-service';
import { UserData} from '../../providers/user-data';
import { Validators, FormBuilder,FormGroup } from '@angular/forms'; // angular js 2 form dependency
import { IndexPage } from '../index/index';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [PeopleService]  
})

export class SignupPage {
  signup: FormGroup;
  token: string;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private peopleService: PeopleService,
    public userData: UserData) {
      
      this.token = navParams.get('token'); 
      /* Specifying the sign up form and validation setting */
      this.signup = this.formBuilder.group({
      username:['',
         Validators.compose([Validators.maxLength(30)
        ])
      ],

      name:['',
 
      ],
      
      age:[''],
      
      email:['',
        Validators.compose([
			  Validators.required,
			  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      ],
      
      postcode:[''],  
      
      gender:[''],
      
      shoppingType:[''],
      
      password:[''],
      
      passwordConfirmation:[''],
    }); 

  } 

  signupForm(){
    alert(this.token);
    // create json data to upload
    var registerData= JSON.stringify({
      usertype: 'customer',
      token: this.token,
      username: this.signup.value.username,
      email: this.signup.value.email,
      postcode: this.signup.value.postcode,
      password: this.signup.value.password,
      age: this.signup.value.age
    }); 
    console.log(registerData);
    // var registerData= JSON.stringify({
    //   username: this.signup.value.username,
    //   name: this.signup.value.name,
    //   token: this.userData.getUserToken(),
    //   email: this.signup.value.email,
    //   postcode: this.signup.value.postcode,
    //   age: this.signup.value.age,
    //   shoppingType: this.signup.value.shoppingType,
    //   password: this.signup.value.password,  
    // }); 

    this.peopleService.register(registerData).subscribe(
      data => {alert("Successful");
                this.userData.signup(this.signup.value.username);
                this.navCtrl.push(IndexPage);
               console.log(data);
              },
      error=> {alert(error);
              console.log(error)}
    );
  }
}
