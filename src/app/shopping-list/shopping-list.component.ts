import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];
  ingredients: Ingredient[] = [];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.updatedShoppingList.subscribe(
      () => {
      this.ingredients = this.shoppingListService.getShoppingList();
      }
    );
  }

  onEditItem (index: number) {
    this.shoppingListService.startedEditing.next(index);
  }



  // onIngredientAdded(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  //   this.shoppingListService.addItemShoppingList(ingredient);
  // }

  ngOnDestroy() {
    // this.shoppingListService.updatedShoppingList.unsubscribe();
    this.subscription.unsubscribe();
  }

}
