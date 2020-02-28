import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import {i18nGetExtension} from '@angular/compiler-cli/src/transformers/program';
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

  addIngredient( ingredient: Ingredient ) {
    this.slService.addIngredient( ingredient );
  }

  selectIngredient( ingredient: Ingredient ) {
    this.slService.selectIngredient( ingredient );
  }

  clearIngredients() {
    this.slService.clearIngredients();
  }

  deleteSelectedIngredients() {
    this.slService.deleteSelectedIngredients();
  }

  isSelected( ingredient: Ingredient) {
    return this.slService.isSelected(ingredient);
  }
}
