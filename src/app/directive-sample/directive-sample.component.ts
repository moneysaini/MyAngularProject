import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css'
})
export class DirectiveSampleComponent {
  num: number = 0;
  colors: string[];
  products: Product[];
  selectedColor: string = "red";
  customerId: string|undefined;
  city: string|undefined;
  country: string|undefined;


  constructor(private activatedRoute: ActivatedRoute){
    this.colors = ["red","green","blue"];
    this.products = [];

    let p1 = new Product(1001,'Laptop','P123',50000);
    let p2 = new Product(1002,'Keyboard','P123',5000);
    let p3 = new Product(1003,'Router','P123',2000);
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);

    this.activatedRoute.params.subscribe(d => {
      this.customerId = d['id'];

    })

    this.activatedRoute.queryParams.subscribe(d => {
      this.city = d['city'];
      this.country = d['country'];
    })
  }
}
