import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild( 'nameInput', { static: false } ) private newIngredientName: ElementRef;
  @ViewChild( 'amountInput', { static: false } ) private newIngredientAmount: ElementRef;

  @Output() ingredientCreated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() clearIngredients: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() deleteIngredients: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  onAddButton() {
    if ( validName( this.newIngredientName ) && validAmount( this.newIngredientAmount ) ) {
      this.createIngredient();
    } else {
      if ( !validAmount( this.newIngredientAmount ) ) {
        alert('please input a valid amount');
      }
      if ( !validName( this.newIngredientName ) ) {
        alert('please input a valid name');
      }
    }
  }

  createIngredient(): void {
    this.ingredientCreated.emit( new Ingredient(
        this.newIngredientName.nativeElement.value,
        this.newIngredientAmount.nativeElement.value ) );
  }

  onClearIngredientsClick() {
    this.clearIngredients.emit({});
  }

  onDeleteClick() {
    this.deleteIngredients.emit({});
  }

}

function validName( newIngredientName: ElementRef ): boolean {
  if ( newIngredientName !== undefined ) {
    if ( newIngredientName.nativeElement !== undefined ) {
      if ( newIngredientName.nativeElement.value !== undefined ) {
        if ( newIngredientName.nativeElement.value.length !== undefined ) {
          return newIngredientName.nativeElement.value.length !== 0;
        }
      }
    }
  }
  return false;
}

function validAmount( newIngredientAmount: ElementRef ): boolean {
  if ( newIngredientAmount !== undefined ) {
    if ( newIngredientAmount.nativeElement !== undefined ) {
      if ( newIngredientAmount.nativeElement.value !== undefined ) {
        return newIngredientAmount.nativeElement.value.length > 0;
      }
    }
  }
  return false;
}
