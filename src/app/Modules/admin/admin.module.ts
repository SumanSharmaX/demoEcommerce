import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalDiscountPipe } from 'src/app/Pipe/cal-discount.pipe1';
import { AddITemComponent } from './components/add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditItemComponent, NavbarComponent,CalDiscountPipe, AddITemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule, FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
