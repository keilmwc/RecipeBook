import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { AddItemComponent } from './shopping-list/add-item/add-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { DropdownDirective } from './dropdown/dropdown.directive';
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    AddItemComponent,
    ShoppingListComponent,
    AddItemComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
