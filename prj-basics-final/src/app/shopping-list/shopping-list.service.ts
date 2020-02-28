import {Ingredient} from '../shared/Ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  selectedIngredients: Ingredient[] = [];

  selectItem: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
    this.selectItem.subscribe(
      (ingredient: Ingredient ) => {
        this.selectIngredient(ingredient);
      }
    );
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
