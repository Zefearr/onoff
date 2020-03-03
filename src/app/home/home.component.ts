import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {
  // pdfSrc = "http://download1519.mediafire.com/eszvgp91otvg/e0mfk9zuc1b7k9n/WW5500K_DC68-03654R-08_EN_AR.pdf"; 
  public base64 = '...SVFT0YNCg==';

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('swatches').valueChanges();
  }

  ngOnInit() {
  }

}
