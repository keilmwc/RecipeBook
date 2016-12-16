import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients)
  }
}
