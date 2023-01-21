import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){}
 

   addProductForm=this.fb.group({
    id: [''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    size: [''],
    isAvailable:[''],
    productImage: [''],
    rating: [''],
    review: [''],
    vendor_name: ['']
   })
   ngOnInit(): void {
  }

   addNewProduct(){

    let newProductData={

    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId ,
    description:this.addProductForm.value. description,
    price:this.addProductForm.value.price ,
    size:this.addProductForm.value.size,
    isAvailable:this.addProductForm.value.isAvailable,
    productImage:this.addProductForm.value.productImage ,
    rating:this.addProductForm.value.rating ,
    review:this.addProductForm.value.review ,
    vendor_name:this.addProductForm.value.vendor_name
   }

   this.ps.addProduct(newProductData).subscribe((item:any)=>{
    alert('Product Added')
    this.router.navigateByUrl('product')
   })
}
}