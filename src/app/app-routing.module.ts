import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { PhonesComponent } from './phones/phones.component';
import { TvsComponent } from './tvs/tvs.component';
import { SwatchesComponent } from './swatches/swatches.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { LoginComponent } from './login/login.component';
import { PdfreaderComponent } from './pdfreader/pdfreader.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'items/:id', component: ItemComponent}, 
  {path: 'items', component: ItemsComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'tvs', component: TvsComponent},
  {path: 'swatches', component: SwatchesComponent},
  {path: 'headphones', component: HeadphonesComponent},
  {path: 'login', component: LoginComponent},


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { } 
