import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import {Ingredient} from "../../ingredient";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []; /** Array of Recipes */
  
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
