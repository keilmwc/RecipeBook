import { Component, OnChanges, Input } from '@angular/core';
import {Ingredient} from "../../../models/ingredient";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'rb-add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.css']
})
export class AddItemComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService ) { }

  // Fire when 'item' value changes
  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true;
    }else{
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    if(!this.isAdd){

    }else{
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item);
    }

  }
}
