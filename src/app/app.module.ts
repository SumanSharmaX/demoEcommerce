import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { MartItemsComponent } from './Components/mart-items/mart-items.component';
import { CalDiscountPipe } from './Pipe/cal-discount.pipe';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    MartItemsComponent,
    CalDiscountPipe,
    ItemDetailComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
