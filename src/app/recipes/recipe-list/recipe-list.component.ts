import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []; /** Array of Recipes */

  recipeTest = new Recipe('Test Input', 'Test Input', 'https://www.procook.com.au/new/wp-content/uploads/2015/01/spicy-grilled-non-vegetarian-meat-food.jpg', "kk")

  /*Trigger new event*/
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe){


    this.recipeSelected.emit(recipe);
    console.log(this);


    /*Push selected recipe to even emitter*/
    this.recipeSelected.emit(recipe);

  }

}
