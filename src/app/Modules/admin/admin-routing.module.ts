import { componentFactoryName } from '@angular/compiler';
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditItemComponent } from './components/edit-item/edit-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {path:'',component: NavbarComponent },
  {path:'edit',component:EditItemComponent}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
