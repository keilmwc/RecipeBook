import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Ingredient} from '../ingredient';
>>>>>>> stage-2

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
<<<<<<< HEAD

=======
  items: Ingredient[] = [];
>>>>>>> stage-2
  constructor() { }

  ngOnInit() {
  }

}
