import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
  animations: [
    trigger('menuState', [
      state('hidden', style({ 
        width: '50px'
      })),
      state('visible', style({
        width: 'auto'

      })),
      transition('hidden <=> visible', animate(100)),
   
    ]),
    trigger('iconstate', [
      state('standard', style({

      }))
    ])
  ] 
})
export class NabvarComponent implements OnInit {
  toggle = false;
  constructor() { }
  ngOnInit() {
  }
  toggleMenu() {
    this.state == 'hidden' ? this.state = 'visible' : this.state = 'hidden';
    this.toggle = !this.toggle;
  } 
  state = 'hidden';
}
