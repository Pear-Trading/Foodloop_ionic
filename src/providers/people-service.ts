import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  
  /* Links to server */
  foodloop_root_url = "http://192.168.2.172:3000/";
  foodloop_root_url_register = this.foodloop_root_url + "register";
  foodloop_root_url_upload = this.foodloop_root_url + "upload";
  foodloop_root_url_edit = this.foodloop_root_url + "edit";
  foodloop_root_url_token = this.foodloop_root_url + "token";

  constructor(public http: Http) {
  }


  getJsonData(){
  return this.http.get('https://www.reddit.com/r/worldnews/.json').map(res => res.json());
  } 



  register(data){ 
    return this.http.post(this.foodloop_root_url_register,data).map(res => res.json());
  }

  upload(data){ 
    return this.http.post(this.foodloop_root_url_upload,data);
  }

  edit(data){ 
    return this.http.post(this.foodloop_root_url_edit,data);
  }
  
  verifyToken(data){ 
    return this.http.post(this.foodloop_root_url_token,data);
  }


/*********************** --  Data representation part -- **************************/
  /* including get request to server to retrieve user data */
  /* manipulation , calculation and respresentation of the retrieved data */

getChartData(type){
  // api
  // get request to retrieve user's point over different period of time
  var chartData;
  switch(type){
    case "Daily":  
      chartData = {
         type: 'line',
         data:{
           labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
           datasets: [{
             label: 'Date',
               data: [12, 19, 3, 5, 2, 3],  
             backgroundColor: [ 
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
             ],
             borderColor:[
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
           }]
         },options: {
                  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
                title: {
            display: true,
            text: 'Daily overview'
        }

         }
      };
      return chartData;

    case "Weekly":
      chartData = {};
      return chartData;

    case "Monthly":
      chartData = {};
      return chartData;

  }
}


}
