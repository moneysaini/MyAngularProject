import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css'
})
export class PipeSampleComponent {
  product: Product;
  DOB: Date;
  names: string[];
  searchText: string;
  router = inject(Router);

  constructor() {
    this.product = new Product(101, 'laptop', 'P123', 800000);
    this.DOB = new Date("1987-10-12");
    this.names = ['pradeep', 'prakash', 'shiv'];
    this.searchText = "";


  }

  redirect() {
    //this.router.navigate(['dir', this.product.productId]);

    this.router.navigate(['dir', this.product.productId], { 
      queryParams: { city: this.searchText, country: 'India', name: 'pradeep' } 
    });
  }

}
