import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  @Input('custcollection')
  customers: string[];

  @Input('name')
  name: string|undefined;

  @Output('onselect')
  onSelect: EventEmitter<string>;

  constructor(){
    this.customers = [];
    this.onSelect = new EventEmitter<string>();
  }

  selectCustomer(cust:string)
  {
      //emit the seelcted customer
      this.onSelect.emit(cust);
  }

}
