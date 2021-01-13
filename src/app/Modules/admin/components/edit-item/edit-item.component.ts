import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/Item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  items:Item[]=[];
  ngOnInit(): void {
    this.items=[
      {name: 'Phone MI',price:100,discount:0,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'RealMe',price:200,discount:10,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'Moto',price:300,discount:10,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'jio',price:400,discount:0,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'M.max',price:500,discount:0,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'lava',price:600,discount:5,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'HP',price:700,discount:10,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'charger',price:40,discount:5,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'Adaptor',price:100,discount:15,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {name: 'acer',price:200,discount:25,description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    ]

}
addItem(newItem:Item){
  console.log(newItem);
  this.items.push(newItem);
 console.log(this.items);
}
}
