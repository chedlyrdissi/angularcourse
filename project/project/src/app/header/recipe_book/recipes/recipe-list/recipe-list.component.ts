import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe1', 'R1',
      // tslint:disable-next-line:max-line-length
      'https://img.sndimg.com/food/image/upload/w_560,h_315,c_thumb,fl_progressive,q_80/v1/img/recipes/19/62/33/sobU9LjR3qh8ul37iAvw_pork-pozole-7704.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementById('rec');
    elem.setAttribute()
  }

}
