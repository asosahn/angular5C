import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  // updatedShoppingList = new EventEmitter<void>();
  updatedShoppingList = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  getShoppingList() {
    return this.ingredients.slice();
  }

  addItemShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.updatedShoppingList.emit();
    this.updatedShoppingList.next();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addToShoppingList(newIngredients: Ingredient[]) {
    // newIngredients.map(item => {
    //   this.ingredients.push(item);
    // });
    this.ingredients.push(...newIngredients);
    this.updatedShoppingList.next();
  }

  onDeleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.updatedShoppingList.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.updatedShoppingList.next(this.ingredients.slice());
  }

}
