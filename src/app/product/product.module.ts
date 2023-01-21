import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import{HttpClientModule}from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ViewAllProductComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
