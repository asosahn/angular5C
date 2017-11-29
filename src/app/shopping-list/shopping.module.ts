import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        FormsModule
    ]
})
export class ShoppingModule {

}