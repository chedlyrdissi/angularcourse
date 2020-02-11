import {Component, EventEmitter, Output} from '@angular/core';
import {HeaderChoice} from '../shared/HeaderChoice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  choice: HeaderChoice = HeaderChoice.NONE;
  @Output() sectionChoice = new EventEmitter<{ choice: HeaderChoice; }>();

  emitChoice() {
    if ( this.sectionChoice === undefined ) {
      this.sectionChoice = new EventEmitter<{ choice: HeaderChoice; }>();
    }
    console.log(this.sectionChoice);
    this.sectionChoice.emit({ choice: this.choice });
  }

  recipesClicked() {
    if ( this.choice === HeaderChoice.RECIPES ) {
      this.choice = HeaderChoice.NONE;
    } else {
      this.choice = HeaderChoice.RECIPES;
    }
  }

  shoppingListClicked() {
    if ( this.choice === HeaderChoice.SHOPPING_LIST ) {
      this.choice = HeaderChoice.NONE;
    } else {
      this.choice = HeaderChoice.SHOPPING_LIST;
    }
  }

  onRecipeClick() {
    this.recipesClicked();
    this.emitChoice();
  }

  onShoppingListClick() {
    this.shoppingListClicked();
    this.emitChoice();
  }
}
