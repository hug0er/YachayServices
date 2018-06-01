
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { AuthPage } from '../pages/auth/auth';
import { CategoryPage } from '../pages/category/category';
import {CategoryService} from '../providers/category-service-mock';
import { HttpClientModule } from '@angular/common/http';
import { CartPage } from '../pages/cart/cart';
import { AddproductPage} from '../pages/addproduct/addproduct';
import { InformationPage} from '../pages/information/information';
import { HttpModule} from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    AddproductPage,
    CategoryPage,
    InformationPage,
    CartPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    CategoryPage,
    AddproductPage,
    InformationPage,
    CartPage,
    //CategoryPage,
    //ItemPage,
    //CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,Camera, FileTransfer, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
