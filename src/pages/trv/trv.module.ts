import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrvPage } from './trv';

@NgModule({
  declarations: [
    TrvPage,
  ],
  imports: [
    IonicPageModule.forChild(TrvPage),
  ],
})
export class TrvPageModule {}
