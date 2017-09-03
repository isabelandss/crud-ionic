import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavPush } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CriarAnimalPage } from '../pages/criar-animal/criar-animal';
import { AnimalPage } from "../pages/animal/animal";
import { EditaAnimalPage } from "../pages/edita-animal/edita-animal";
// import { LoginPage } from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";

export const firebaseConfig = {
    apiKey: "AIzaSyCD95rEkeZW3r4jUbf7vuHjkzmhOnV42Hw",
    authDomain: "crud-ionic-345f2.firebaseapp.com",
    databaseURL: "https://crud-ionic-345f2.firebaseio.com",
    projectId: "crud-ionic-345f2",
    storageBucket: "crud-ionic-345f2.appspot.com",
    messagingSenderId: "460594867361"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalPage,
    CriarAnimalPage,
    EditaAnimalPage,
    // LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalPage,
    CriarAnimalPage,
    EditaAnimalPage,
    // LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    NavPush,
  ]
})
export class AppModule {}
