import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('meat', 2),
      new Ingredient('peas', 1)
    ]),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('potatos', 2),
      new Ingredient('tomatos', 1)
    ]),
    new Recipe('A Test Recipe 3', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[]),
    new Recipe('A Test Recipe 4', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe( index: number ) {
    return this.recipes[ index ];
  }

}
