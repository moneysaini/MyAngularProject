import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  productName: string = "Bag";
  productCode: string = "tete";

  showAlert():void{
    alert('Product Name:' + this.productName);
  }

}
