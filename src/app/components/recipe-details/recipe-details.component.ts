import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../../models/recipe';
import {ShoppingListService} from '../../services/shopping-list.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'rb-recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
selectedRecipe: Recipe;
private recipeIndex: number;
private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  // Observable to watch for changes to params in URL
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  // Navigate to recipeEdit component
  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }


  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  onAddShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  // Close subscription to prevent memory leaks
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
