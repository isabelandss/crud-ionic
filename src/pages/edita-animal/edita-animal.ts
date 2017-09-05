import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
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
  selector: 'page-edita-animal',
  templateUrl: 'edita-animal.html',
})

export class EditaAnimalPage {
  ref: FirebaseObjectObservable<any>;
  id: string;
  animal: Animal;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.id = this.navParams.get('id');
    this.ref = this.af.object('/animal/' + this.id);
    this.animal = new Animal();

    this.animal.nome = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaAnimalPage');
  }

  salvar(){    
    this.ref.update(this.animal).then(() => {
       this.navCtrl.popToRoot(AnimalPage);
    });    
  }

  excluir(id){
    this.ref.remove();
    this.navCtrl.popToRoot(AnimalPage);
  }  
}
