import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const routes : Routes = [
    {path: 'shoppinglist', component: ShoppingListComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingRoutingModule {}