import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../../models/recipe";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() selectedRecipe: Recipe;
private recipeIndex: number = 1;

  constructor(private sls: ShoppingListService, private router: Router) { }

  ngOnInit() {

  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
    this.router.navigate(['/recipes']);
  }
  onAddShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
