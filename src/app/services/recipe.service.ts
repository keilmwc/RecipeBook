import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../models/recipe'
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Ingredient} from "../models/ingredient";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', "2 gram"),
      new Ingredient('Pork Meat', "1 gram")
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) { }

  // Get all recipes
  getRecipes(){
      return this.recipes;
  }

  // Get single recipe
  getRecipe(id: number){
    return this.recipes[id];
  }

  // Delete recipe
  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  // Pushes new recipe to array
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  // Push edited recipe to array in place of old recipe
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  // Store recipes on DB
  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-9b93f.firebaseio.com/recipes.json', body, {headers: headers})
  }

  // Get recipes from DB
  fetchData(){
    this.http.get('https://recipebook-9b93f.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
