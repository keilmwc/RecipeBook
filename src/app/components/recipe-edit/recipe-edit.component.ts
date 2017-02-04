import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styleUrls: ['recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private router: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  // Retrieve Id from recipe
  ngOnInit() {
    let isNewRecipe = true;
    // Subscribe to params observable
    this.subscription = this.router.params.subscribe(
      (params: any) => {
        // Check if recipe is new or existing
        if (params.hasOwnProperty('id')) {
          isNewRecipe = false;
          // Extract 'id' from route and set to recipeIndex
          this.recipeIndex = +params['id'];
        }
        else {
          isNewRecipe = true;
        }
        console.log(isNewRecipe);
      }
    );
  }

  // Prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
