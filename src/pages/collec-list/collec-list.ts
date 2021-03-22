import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewJeuPage} from "./new-jeu/new-jeu";
import {JeuPage} from "./jeu/jeu";
import {JeuProvider} from "../../providers/jeu/jeu";
import {Subscription} from "rxjs";

/**
 * Generated class for the CollecListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collec-list',
  templateUrl: 'collec-list.html',
})
export class CollecListPage {
  public jeux: any = [];
  jeuSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Jeu: JeuProvider
  ) {}

  ngOnInit() {
    this.jeuSubscription = this.Jeu.jeuSubject.subscribe((listJeu) => {
      console.log(listJeu)
      this.jeux = listJeu;
    });
  }

  onGoToCreate() {
    this.navCtrl.push(NewJeuPage);
  }

  onGoToJeu(jeuName: string, _id: number) {
    this.navCtrl.push(JeuPage, {name: jeuName, id: _id});
  }

}
