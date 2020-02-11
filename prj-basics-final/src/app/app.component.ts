import { Component } from '@angular/core';
import {HeaderChoice} from './shared/HeaderChoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  choice: HeaderChoice = HeaderChoice.NONE;

  onChoiceChanged( newChoice: { choice: HeaderChoice; } ): void {
    this.choice = newChoice.choice;
  }

  recipeHidden(): boolean {
    console.log('recipeHidden ' + this.choice === HeaderChoice.NONE || this.choice === HeaderChoice.SHOPPING_LIST );
    return this.choice === HeaderChoice.NONE || this.choice === HeaderChoice.SHOPPING_LIST;
  }

  shoppingListHidden(): boolean {
    console.log('shoppingListHidden ' + this.choice === HeaderChoice.NONE || this.choice === HeaderChoice.RECIPES );
    return this.choice === HeaderChoice.NONE || this.choice === HeaderChoice.RECIPES;
  }
}
