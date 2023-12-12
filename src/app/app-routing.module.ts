import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProduitComponent} from './add-produit/add-produit.component';
import {ProduitsComponent} from './produits/produits.component';
import {HadithComponent} from "./hadith/hadith.component";


const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"},
  {path: "hadith", component: HadithComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
