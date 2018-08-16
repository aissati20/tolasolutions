import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatMobilPage } from './mat-mobil';

@NgModule({
  declarations: [
    MatMobilPage,
  ],
  imports: [
    IonicPageModule.forChild(MatMobilPage),
  ],
})
export class MatMobilPageModule {}
