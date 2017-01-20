import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../../models/ingredient";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'rb-add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.css']
})
export class AddItemComponent implements OnInit {
  isAdd = true;
  item: Ingredient;
  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient){
    if(!this.isAdd){

    }else{
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item);
    }

  }
}
