import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

import { AddItemComponent } from './components/shopping-list/add-item/add-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

import { DropdownDirective } from './components/dropdown/dropdown.directive';
import {ShoppingListService} from "./services/shopping-list.service";

import { routing } from './routing/routes';
import {RecipeStartComponent} from "./components/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    AddItemComponent,
    ShoppingListComponent,
    AddItemComponent,
    DropdownDirective,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ShoppingListService,
              FormBuilder],
  bootstrap: [AppComponent,]
})
export class AppModule { }
