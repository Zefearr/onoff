import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { SwatchService } from '../swatch.service'
import { Swatch } from '../models/swatch';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-swatches',
  templateUrl: './swatches.component.html',
  styleUrls: ['./swatches.component.scss']
})
export class SwatchesComponent implements OnInit, OnDestroy {

  itemsArr = [];
  items: Swatch[];
  subscription: Subscription;
  editState: boolean = false;
  itemToEdit: Swatch[];
  controlsContainer = document.getElementById('item--controls');
  item: Swatch;
  constructor(private swatchService: SwatchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.subscription = this.swatchService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    });
  } 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }
  deleteItem(event, item) {
    this.swatchService.deleteItem(item)
  }
  editItem(event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }
  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
  showControls(event, item) {
    // let curr;
    // let wrapper = document.getElementsByClassName('item--actions');
    // let arrWrapper = Array.from(wrapper);
    // arrWrapper.forEach((item)=> {
  
    // })
  
   

   
  }
  addItemForCheck(item) {
    this.itemsArr.push(item);
    console.log(this.itemsArr);
    document.getElementById('check').innerHTML += this.itemsArr[0].name;
  }
  
}
