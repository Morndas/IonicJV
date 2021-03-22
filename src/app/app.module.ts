import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CollecListPageModule} from "../pages/collec-list/collec-list.module";
import {AboutPageModule} from "../pages/about/about.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {JeuPageModule} from "../pages/collec-list/jeu/jeu.module";
import {NewJeuPageModule} from "../pages/collec-list/new-jeu/new-jeu.module";
import { JeuProvider } from '../providers/jeu/jeu';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";

const firebase = {
  apiKey: 'AIzaSyBFEVypIVn84LT3xd2XS10cm4iPVfOlMcM',
  authDomain: 'jeux-videos-18639.firebaseapp.com',
  projectId: 'jeux-videos-18639',
  storageBucket: 'jeux-videos-18639.appspot.com',
  messagingSenderId: '773810939783',
  appId: '1:773810939783:web:86de360a13e844ce4bd522'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CollecListPageModule,
    AboutPageModule,
    TabsPageModule,
    JeuPageModule,
    NewJeuPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JeuProvider
  ]
})
export class AppModule {}
