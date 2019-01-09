import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pesto Pizza', 
      'Spinach and a crispy crust',
       'https://www.healthymummy.com/wp-content/uploads/2017/04/Spinach-Pesto-Pizza-2.jpg', 
       [
         new Ingredient('Cheeses', 3),
         new Ingredient('Spinach', 1), 
         new Ingredient('Pesto', 1)
       ]),
    new Recipe(
      'Lamb Burger', 
      'Use grass fed, local lamb', 
      'https://www.jocooks.com/wp-content/uploads/2016/06/greek-lamb-burgers-1.jpg', 
      [
        new Ingredient('Cheddar', 1),
        new Ingredient('Ground Lamb', 1), 
        new Ingredient('Rosemary', 1),
        new Ingredient('Ketchup', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // This will return a new array which is an exact copy of the original
    // This preserves the original and limits access from outside, 
    // with the private decorator before the declaration
    return this.recipes.slice();
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
