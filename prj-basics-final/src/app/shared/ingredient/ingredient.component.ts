import {Component, Input} from '@angular/core';
import {Ingredient} from '../Ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  @Input() ingredient: Ingredient;

  constructor() { }

}
