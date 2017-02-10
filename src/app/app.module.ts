import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TokenPage } from '../pages/token/token';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ReceiptPage } from '../pages/receipt/receipt';
import { UserPage } from '../pages/user/user';
import { RankingPage } from '../pages/ranking/ranking';
import { SettingPage } from '../pages/setting/setting';
import { IndexPage } from '../pages/index/index';
import { OverviewPage } from '../pages/overview/overview';
import { AccountPage } from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TokenPage,
    SignupPage,
    AboutPage,
    ReceiptPage,
    UserPage,
    RankingPage,
    SettingPage,
    IndexPage,
    AccountPage,
    OverviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TokenPage,
    SignupPage,
    AboutPage,
    ReceiptPage,
    UserPage,
    RankingPage,
    SettingPage,
    IndexPage,
    AccountPage,
    OverviewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
