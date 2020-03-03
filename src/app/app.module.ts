import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { TvsComponent } from './tvs/tvs.component';
import { PhonesComponent } from './phones/phones.component';
import { SwatchesComponent } from './swatches/swatches.component';
import { HeadphonesComponent } from './headphones/headphones.component';

import { SwatchService } from './swatch.service';
import { FormsModule } from '@angular/forms';
import { AddSwatchComponent } from './add-swatch/add-swatch.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    ItemComponent,
    ItemsComponent,
    TvsComponent,
    PhonesComponent,
    SwatchesComponent,
    HeadphonesComponent,
    AddSwatchComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    NgxExtendedPdfViewerModule
  
    

   
     
  
  
  ],
  providers: [SwatchService, AuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
