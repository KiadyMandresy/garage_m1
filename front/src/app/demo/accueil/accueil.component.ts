import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/voitureService';
import { Car } from '../../domain/car';
import { Person } from 'src/app/domain/personne';
import { TableModule } from 'primeng/table'; 
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';

enum MyEnum {
  available,
  garage,
  repaired
}
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, SharedModule,CardModule,ButtonModule,ProgressSpinnerModule,TableModule,
     DragDropModule, PanelModule, TabViewModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export default class AccueilComponent {
  availableProducts: Car[];
  selectedProducts: Car[];
  draggedProduct: Car;
  list : any;
  results: any;
  enum: typeof MyEnum = MyEnum;
  status : number = MyEnum.available;
  constructor(
    private primengConfig: PrimeNGConfig,
    private apiVoiture: ApiService) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.selectedProducts = [];
    var id = sessionStorage.getItem('_id');
    this.apiVoiture.getDataAvailable(id).subscribe(
      (response) => {
        console.log(response);
        this.availableProducts = response;
      },
      (error) => {
        console.error(error);
      }
    );
    // .then((data) => (this.availableProducts = data));
    console.log("available products: "+this.availableProducts);
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
          this.apiVoiture.InsertIntoGarage(this.draggedProduct._id).subscribe(res => {return res},(err)=>console.error(err));
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
