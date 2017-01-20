import { Component } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {

}
