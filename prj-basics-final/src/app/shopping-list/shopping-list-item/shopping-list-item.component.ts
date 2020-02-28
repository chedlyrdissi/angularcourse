import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  isSelected: boolean;

  constructor( private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.isSelected = this.slService.isSelected(this.ingredient);
  }

  onSelectItem() {
    this.slService.selectItem.emit(this.ingredient);
  }
}


