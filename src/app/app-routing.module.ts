import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MartItemsComponent } from './Components/mart-items/mart-items.component';


const routes: Routes = [
  {path:'items',component:MartItemsComponent},
  {path:'itemDetail',component:ItemDetailComponent},
  {path:'**',component:MartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
