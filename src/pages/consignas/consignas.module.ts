import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsignasPage } from './consignas';

@NgModule({
  declarations: [
    ConsignasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsignasPage),
  ],
})
export class ConsignasPageModule {}
