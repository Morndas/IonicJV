import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewJeuPage } from './new-jeu';

@NgModule({
  declarations: [
    NewJeuPage,
  ],
  imports: [
    IonicPageModule.forChild(NewJeuPage),
  ],
})
export class NewJeuPageModule {}
