import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor( private recipeService: RecipeService ) { }

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
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
