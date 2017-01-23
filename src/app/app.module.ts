import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TokenPage } from '../pages/token/token';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TokenPage,
    SignupPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TokenPage,
    SignupPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
