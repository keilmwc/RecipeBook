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
      this.item = {name: null, amount: null};
    }else{
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if(!this.isAdd){
      this.shoppingListService.editItem(this.item, newIngredient);

    }else{
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);
    }

  }
}
