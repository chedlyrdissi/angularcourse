import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  selectedIngredients: Ingredient[] = [];

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.ingredients;
    this.selectedIngredients = this.slService.selectedIngredients;
  }
}
