import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() recipeItemClicked: EventEmitter< {} > = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  getRecipeName() {
    return ( this.recipe === undefined ) ? '' : this.recipe.name ;
  }

  getRecipeDescription() {
    return ( this.recipe === undefined ) ? '' : this.recipe.description ;
  }

  getRecipeImage() {
    return ( this.recipe === undefined ) ? '' : this.recipe.imagePath ;
  }

  onRecipeItemClick(): void {
    this.recipeItemClicked.emit();
  }
}
