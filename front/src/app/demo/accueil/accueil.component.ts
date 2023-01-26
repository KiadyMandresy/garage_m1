import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/voitureService';
import { Car } from '../../domain/car';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, SharedModule,CardModule,ButtonModule,ProgressSpinnerModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export default class AccueilComponent {
  availableProducts: Car[];
  selectedProducts: Car[];
  draggedProduct: Car;
  list : any;
  results: any;
  client: Car["personne"];
  constructor(
    private primengConfig: PrimeNGConfig,
    private apiVoiture: ApiService) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.selectedProducts = [];
    this.apiVoiture.getData(this.client.id).then((data) => (this.availableProducts = data));
  }
  // LoadCars(event: LazyLoadEvent){
  //   this.apiVoiture.getData().subscribe(response =>
  //     {
  //       this.list = response;
  //     });
  // }
  dragStart(product: Car) {
    this.draggedProduct = product;
  }

  drop() {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = null;
      }
  }

  dragEnd() {
      this.draggedProduct = null;
  }

  findIndex(product: Car) {
      let index = -1;
      for (let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }
}
