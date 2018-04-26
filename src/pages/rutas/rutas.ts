import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

import { RutasServiceProvider } from '../../providers/rutas-service/rutas-service';
import { Observable } from 'rxjs/observable';
import * as firebase from 'Firebase';


/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
  //rutas: AngularFireList<any>;
  userUID: string;
  unData: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
    private db: AngularFireDatabase,
    private auth: AuthService,
    private ruta: RutasServiceProvider) {
      this.userUID = auth.getUid();
      this.unData = this.ruta.getRutasList();
       //this.unData = db.list<any>('/rutasUser/' + this.userUID).valueChanges();
      /*.subscribe(rutas => {
        this.unData = rutas;
        console.log(this.unData);
      });*/

  }

  ionViewDidLoad() {
    
    console.log('RutasPage');
  }
  itemSelected(objt){
    console.log(objt);
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
