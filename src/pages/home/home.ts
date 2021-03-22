import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CollecListPage} from "../collec-list/collec-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToCollec() {
    this.navCtrl.push(CollecListPage);
  }

}
