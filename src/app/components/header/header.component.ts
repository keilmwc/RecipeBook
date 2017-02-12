import { Component, OnInit } from '@angular/core';
import {DropdownDirective} from '../dropdown/dropdown.directive';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent{

  constructor(private recipeService: RecipeService) { }

  onStore(){
    return this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    )
  }

  onFetch(){
    this.recipeService.fetchData();
  }



}
