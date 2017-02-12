import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import {Recipe} from '../models/recipe'
import {Headers, Http} from "@angular/http";

@Injectable()
export class RecipeService {
  /*Array of recipe objects*/
  private recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala', '4/5 Stars', 'https://s-media-cache-ak0.pinimg.com/originals/30/08/09/300809549465a4e5ec8ac31c9d5ff2ce.jpg',[new Ingredient('French Fries', 2),
    new Ingredient('Pork Meat', 1)]),
    new Recipe('Asain Zing Wings', '4/5 Stars', 'http://seonkyounglongest.com/wp-content/uploads/2014/02/167921_1273196766571_4035001_n1.jpg',[
      new Ingredient('Chicken', 500)
    ])
  ];
  constructor(private http: Http) { }
  getRecipes(){
      return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebook-9b93f.firebaseio.com/recipes.json', body, {headers: headers})
  }
}
