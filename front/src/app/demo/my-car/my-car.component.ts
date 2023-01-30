import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Car } from 'src/app/domain/car';
import { ApiService } from 'src/app/services/voitureService';
import { SharedModule } from 'src/app/theme/shared/shared.module';

enum MyEnum {
  available,
  garage,
  repaired
}

@Component({
  selector: 'app-my-car',
  standalone: true,
  imports: [CommonModule, SharedModule,RouterModule],
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.scss']
})
export default class MyCarComponent {
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
    this.apiVoiture.getData(id).subscribe(
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
}
