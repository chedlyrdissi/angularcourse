import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import {i18nGetExtension} from '@angular/compiler-cli/src/transformers/program';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  selectedIngredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

  addIngredient( ingredient: Ingredient ) {
    this.ingredients.push(ingredient);
  }

  selectIngredient( ingredient: Ingredient ) {
    if ( this.isSelected(ingredient) ) {
      this.selectedIngredients.splice( this.selectedIngredients.indexOf(ingredient), 1 );
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }

  clearIngredients() {
    this.ingredients = [];
    this.selectedIngredients = [];
  }

  deleteSelectedIngredients() {
    for ( const ing of this.selectedIngredients) {
      this.ingredients.splice( this.ingredients.indexOf(ing), 1);
    }
    this.selectedIngredients = [];
  }

  isSelected( ingredient: Ingredient): boolean {
    return ingredient !== undefined && this.selectedIngredients.indexOf(ingredient) > -1;
  }

}
