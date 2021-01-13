import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/Models/Item';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  itemFormGroup:FormGroup;
  @Output() itemEvent=new EventEmitter<Item>();
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ItemFormValidation();
  }
  ItemFormValidation(){
    this.itemFormGroup=this.fb.group({
      Name:['',[Validators.required,Validators.minLength(2)]],
      Price:['',Validators.required],
      Discount:['',Validators.required],
      Description:['']
    })
  }
  Update(){
      console.log(this.itemFormGroup)
      this.itemEvent.emit(this.itemFormGroup.value);
      console.log(this.itemEvent);
  }

}
