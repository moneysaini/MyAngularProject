import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  customerName: string | undefined;
  customerList: string[];

  @ViewChild('clistcomp')
  customerListComp: CustomerListComponent | undefined;

  @ViewChild('divMessage')
  div: ElementRef | undefined;

  constructor() {
    this.customerList = [];
  }

  addCustomer() {
    //this.customerList.push(this.customerName??"");


    this.customerListComp?.customers.push(this.customerName ?? "");


    if (this.div != undefined) {
      this.div.nativeElement.textContent = 'New customer added';
      setTimeout(() => {
        if (this.div != undefined) {
          this.div.nativeElement.textContent = "";
        }
      }, 2000);

    }

  }

  readValues(msg: string) {
    this.customerName = msg;
  }

}
