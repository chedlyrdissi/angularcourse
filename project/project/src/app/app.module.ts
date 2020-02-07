import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header/header.component';
import { RecipesComponent } from './header/recipe_book/recipes/recipes.component';
import { RecipeListComponent } from './header/recipe_book/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipe_book/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemsComponent } from './header/recipe_book/recipes/recipe-items/recipe-items.component';
import { RecipeItemComponent } from './header/recipe_book/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './header/shopping_list/shopping-list/shopping-list.component';
import { IngredientComponent } from './header/shopping_list/ingredient/ingredient.component';
import { ShoppingListEditComponent } from './header/shopping_list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    IngredientComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
