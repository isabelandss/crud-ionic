import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AnimalPage } from '../animal/animal';

export class Animal {
    nome: string;
    dataNascimento: string;
    especie: string;
    sexo: string;
    tipo: string;
}

@IonicPage()
@Component({
  selector: 'page-criar-animal',
  templateUrl: 'criar-animal.html',
})
export class CriarAnimalPage {
  lista: FirebaseListObservable<any>;
  animal: Animal;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public navPush: NavPush) {
    this.navCtrl = navCtrl;
    this.lista = af.list('/animal');
    this.animal = new Animal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarAnimalPage');
  }

  cadastrar() {
    this.lista.push(this.animal).then(() => {
      this.animal = new Animal();
    });
    this.navCtrl.popToRoot(AnimalPage);
  }
}
