import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaAnimalPage } from './edita-animal';

@NgModule({
  declarations: [
    EditaAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaAnimalPage),
  ],
})
export class AnimalUpdatePageModule {}
