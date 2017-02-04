import {RecipeStartComponent} from "../components/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "../components/recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "../components/recipe-details/recipe-details.component";
import {Routes} from "@angular/router";
/**
 * Created by keilc on 3/02/2017.
 */

export const RECIPE_ROUTES: Routes =[
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailsComponent },
  { path: ':id/edit', component: RecipeEditComponent }
];
