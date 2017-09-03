import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarAnimalPage } from './criar-animal';

@NgModule({
  declarations: [
    CriarAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarAnimalPage),
  ],
})
export class AnimalCreatePageModule {}
