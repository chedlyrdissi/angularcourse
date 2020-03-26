import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  recipe: Recipe;

  constructor( private recipeService: RecipeService, private route: ActivatedRoute ) {
    this.recipe = recipeService.getRecipe( +this.route.snapshot.params['id'] );
    this.route.params.subscribe(
      ( params: Params ) => {
        this.recipe = recipeService.getRecipe( +params['id'] );
      }
    );
  }

}
