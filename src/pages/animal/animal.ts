import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CriarAnimalPage } from '../criar-animal/criar-animal';
import { EditaAnimalPage } from '../edita-animal/edita-animal';

export class Animal {
    nome: string;
    dataNascimento: string;
    especie: string;
    sexo: string;
    tipo: string;
}

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})

export class AnimalPage {
  lista: FirebaseListObservable<any>;
  animal: Animal;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public NavPush: NavPush, 
              public af: AngularFireDatabase,
              public modal: ModalController) {
    this.navCtrl = navCtrl;
    this.lista = af.list("/animal");
    this.animal = new Animal();
  }

  navegarCriarAnimal() {
    this.navCtrl.push(CriarAnimalPage);
  }

  editar(id){
    this.navCtrl.push(EditaAnimalPage, {id: id});
  }
}
