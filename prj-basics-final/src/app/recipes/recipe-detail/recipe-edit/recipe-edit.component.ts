import { Component } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {

  recipe: Recipe;

  constructor( private recipeService: RecipeService, private route: ActivatedRoute ) {
    this.recipe = this.recipeService.getRecipe( +this.route.snapshot.params['id'] );
    this.route.params.subscribe(
      ( params: Params ) => {
        this.recipe = this.recipeService.getRecipe( +params['id'] );
      }
    );
  }

}
