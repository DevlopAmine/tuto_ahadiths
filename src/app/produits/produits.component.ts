import {Component, OnInit} from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits?: Produit[]; //un tableau de chînes de caractères
  constructor(private produitService: ProduitService) {

  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits()
  }

}
