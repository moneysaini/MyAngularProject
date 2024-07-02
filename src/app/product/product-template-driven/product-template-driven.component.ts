import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrl: './product-template-driven.component.css'
})
export class ProductTemplateDrivenComponent {

  product: Product;
  
  constructor() {
    this.product = new Product();
  }

  saveProduct(f: NgForm) {
    if (f.valid) {
      //save in db
      
      alert('Product saved successfully');
    }
  }
}
