import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import 'rxjs/add/operator/map'

/*
  Generated class for the JeuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JeuProvider {
  private jeux: any = []
  jeuSubject = new Subject<any>();

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllJeux();
  }

  emitJeuSubject() {
    this.jeuSubject.next(this.jeux.slice());
  }

  getAllJeux() {
    return this.db.collection('jeux').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.jeux = res;
      this.emitJeuSubject();
    });
  }

  getJeuById(id: number) {
    for (const jeu of this.jeux) {
      if (jeu.id === id) {
        return jeu;
      }
    }
  }

  saveNewJeu(jeu: any) {
    return new Observable(obs => {
      this.db.collection('jeux').add(jeu).then(() => {
        console.log('success');
        obs.next();
      });
    });
  }

  update(jeu: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`jeux/${id}`).update(jeu);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`jeux/${id}`).delete();
  }

}
