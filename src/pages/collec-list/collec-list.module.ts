import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollecListPage } from './collec-list';

@NgModule({
  declarations: [
    CollecListPage,
  ],
  imports: [
    IonicPageModule.forChild(CollecListPage),
  ],
})
export class CollecListPageModule {}
