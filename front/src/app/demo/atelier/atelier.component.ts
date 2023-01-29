import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGConfig, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { Car } from 'src/app/domain/car';
import { ApiService } from 'src/app/services/voitureService';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from '@angular/router';

enum MyEnum {
  available,
  garage,
  repaired
}

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  imports: [CommonModule, SharedModule,CardModule,ButtonModule,ProgressSpinnerModule,TableModule,
    DragDropModule, PanelModule, TabViewModule,DialogModule,ConfirmDialogModule],
  styleUrls: ['./atelier.component.scss'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `],
  standalone: true
})
export  default class AtelierComponent {
  availableProducts: Car[];
  selectedProducts: Car[];
  draggedProduct: Car;
  list : any;
  results: any;
  enum: typeof MyEnum = MyEnum;
  status : number = MyEnum.available;
  constructor(
    private primengConfig: PrimeNGConfig,
    private apiVoiture: ApiService,
    private confirmationService: ConfirmationService,
    private _router: Router) {
  }
  displayModal: boolean;
  confirm: boolean;
  msgs: Message[] = [];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.selectedProducts = [];
    var id = sessionStorage.getItem('_id');
    this.apiVoiture.getVoitInGarage(id).subscribe(
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
          //this.apiVoiture.InsertIntoGarage(this.draggedProduct._id).subscribe(res => {return res},(err)=>console.error(err));
          //this.showModalDialog();
          //this.confirm1(draggedProductIndex);
          this.confirmationService.confirm({
            message: 'Réceptionner Voiture?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
                this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
                this.draggedProduct = null;
                this._router.navigateByUrl('/');
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
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
//   showModalDialog() {
//     this.displayModal = true;
// }
// confirm1(draggedProductIndex : any) {
//   this.confirmationService.confirm({
//       message: 'Réceptionner Voiture?',
//       header: 'Confirmation',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//           this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
//           this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
//           this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
//           this.draggedProduct = null;
//       },
//       reject: () => {
//           this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
//       }
//   });
// }
}
