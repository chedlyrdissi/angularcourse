import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild( 'nameInput', { static: false } ) private newIngredientName: ElementRef;
  @ViewChild( 'amountInput', { static: false } ) private newIngredientAmount: ElementRef;

  constructor( private slService: ShoppingListService ) { }

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
    this.slService.addIngredient( new Ingredient(
      this.newIngredientName.nativeElement.value,
      this.newIngredientAmount.nativeElement.value
    ) );
  }

  onClearIngredientsClick() {
    this.slService.clearIngredients();
  }

  onDeleteClick() {
    this.slService.deleteSelectedIngredients();
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
