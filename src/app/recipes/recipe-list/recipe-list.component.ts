import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
                          new Recipe( 'Recipe one', 
                                      'This is a Test Recipe', 
                                      'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg'),
                          new Recipe( 'Recipe one', 
                                      'This is a Test Recipe', 
                                      'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg'),
                      ];
  constructor() { }

  ngOnInit() {
  }

}
