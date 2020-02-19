import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Input() isSelected: boolean;
  @Output() selectItem: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem() {
    this.selectItem.emit({});
  }
}


