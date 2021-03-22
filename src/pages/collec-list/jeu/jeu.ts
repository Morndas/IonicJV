import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {JeuProvider} from "../../../providers/jeu/jeu";

/**
 * Generated class for the JeuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeu',
  templateUrl: 'jeu.html',
})
export class JeuPage {
  public modif: boolean = false;
  public name: string;
  public id: number;
  public jeu: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Jeu: JeuProvider,
    private Toast: ToastController
  ) {}

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.id = this.navParams.get('id');
    this.jeu = this.Jeu.getJeuById(this.id);
    console.log(this.jeu)
  }

  onGoAccessModif() {
    this.modif = true;
  }

  onModif() {
    this.Jeu.update(this.jeu.data, this.jeu.id).subscribe(() => {
      const  toast = this.Toast.create({
        message: "Vos modifications ont été enregistrées",
        duration: 2000
      });
      toast.present();
      this.modif = false;
    });
  }

}
