import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Item } from 'ionic-angular';

/*
  Generated class for the RutasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class Ruta {
  body: string;
}
@Injectable()

export class RutasServiceProvider {
  rutas: Observable<any[]>;
  userUID: string;
  constructor(private db: AngularFireDatabase,private auth: AuthService) {
    //const item: AngularFireObject<Item> =db.object('/rutasUser/' + this.userUID).valueChanges();
    this.userUID = auth.getUid();
    console.log(auth.getUid());
    console.log('Hello RutasServiceProvider Provider');
    console.log(this.getRutasList());
  }

  getRutasList() {
    console.log('estas en rutas llist')
    if (!this.userUID) return;
    this.rutas = this.db.list('rutasUser/' + this.userUID).valueChanges();
    this.rutas.subscribe( data =>{
      console.log(data);
    });
    console.log('cargo')
    return this.rutas;
  }

}
