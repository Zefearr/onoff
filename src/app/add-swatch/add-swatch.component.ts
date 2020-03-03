import { Component, OnInit } from '@angular/core';
import { Swatch } from '../models/swatch'; 
import { SwatchService } from '../swatch.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-add-swatch',
  templateUrl: './add-swatch.component.html',
  styleUrls: ['./add-swatch.component.scss']
})
export class AddSwatchComponent implements OnInit {
  item: Swatch = {
    category: '',
    type: '',
    name: '',
    imageUrl: '',
    isSmart: ''

  }
  public Editor = ClassicEditor;
  constructor(private swatchService: SwatchService, public auth: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    if(this.item.name != '' && this.item.imageUrl != '') {
      this.swatchService.addItem(this.item);
      this.item.name = '';
      this.item.imageUrl = ''
    }
  }

}
