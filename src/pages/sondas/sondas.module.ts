import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SondasPage } from './sondas';

@NgModule({
  declarations: [
    SondasPage,
  ],
  imports: [
    IonicPageModule.forChild(SondasPage),
  ],
})
export class SondasPageModule {}
