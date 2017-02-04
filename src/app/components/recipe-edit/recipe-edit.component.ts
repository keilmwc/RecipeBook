import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../../models/recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styleUrls: ['recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipe: Recipe;
  private recipeIndex: number;
  private isNewRecipe = true;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  // Retrieve Id from recipe
  ngOnInit(){
    // Subscribe to params observable
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        // Check if recipe is new or existing
        if (params.hasOwnProperty('id')) {
          this.isNewRecipe = false;
          // Extract 'id' from route and set to recipeIndex
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else {
          this.isNewRecipe = true;
          this.recipe = null;
        }
        this.initForm();
        console.log(this.isNewRecipe);
      }
    );
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNewRecipe){
      this.recipeService.addRecipe(newRecipe);
    }else{
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  // Navigate back to previous location
  private navigateBack(){
    this.router.navigate(['../']);
  }

  onCancel(){
    this.navigateBack();
  }
  // Prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(){
    let recipeName = '';
    let recipeImageURL = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNewRecipe){
      for(let i = 0; i < this.recipe.ingredients.length; i++){
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageURL = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageURL, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}
