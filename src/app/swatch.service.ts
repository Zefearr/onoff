import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Swatch } from '../app/models/swatch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'; 
import 'rxjs/rx';
import { switchMap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SwatchService {




  items$: Observable<Swatch[]>;
  categoryFilter$: BehaviorSubject<string|null>;
  nameFilters$: BehaviorSubject<string|null>;
  itemsCollection: AngularFirestoreCollection<Swatch>;
  itemDoc: AngularFirestoreDocument<Swatch>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('swatches', ref => ref.limit(5));

    this.categoryFilter$ = new BehaviorSubject(null);
    this.nameFilters$ = new BehaviorSubject(null);
    this.items$ = combineLatest(
      this.categoryFilter$,
      this.nameFilters$
    ).pipe(
      switchMap(([category,name]) => 
        afs.collection('swatches', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (category) { query = query.where('category', '==', category) };
          if (name) { query = query.where('name', '==', name) };
          return query;
        }).snapshotChanges().map(changes => {
              return changes.map(a => {
                const data = a.payload.doc.data() as Swatch;
                data.id = a.payload.doc.id;
                return data;
              })
            })
      )
    );
  }

  filterByCategory(category: string|null) { 
    this.categoryFilter$.next(category); 
  }
  filterByName(name: string|null) {
    this.nameFilters$.next(name); 
  }

  combineFilters(name: string|null, category: string|null){
    this.categoryFilter$.next(category); 
    this.nameFilters$.next(name); 
  }



  getItems() {
    return this.items$;
  } 
  addItem(item: Swatch) {
    this.itemsCollection.add(item);
  }
  deleteItem(item: Swatch) {
    this.itemDoc = this.afs.doc(`swatches/${item.id}`);
    this.itemDoc.delete();
  }







}
  



  
  
  
