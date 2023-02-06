import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleCasePiPe} from "./pipes/toggle-case.pìpe";

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderPageComponent,
    UncommonPageComponent,
    ToggleCasePiPe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
