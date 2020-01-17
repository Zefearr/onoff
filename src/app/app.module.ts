import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'; 

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const config = { 
  apiKey: "AIzaSyDjjApBTKdJ2WzhY6-NJECk6I1BxNEZlpA",
  authDomain: "onoff-b83d6.firebaseapp.com",
  databaseURL: "https://onoff-b83d6.firebaseio.com",
  projectId: "onoff-b83d6", 
  storageBucket: "onoff-b83d6.appspot.com",
  messagingSenderId: "502353735635",
  appId: "1:502353735635:web:70201b5b269ad49c4b8926",
  measurementId: "G-QC0N7Z7D29"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
