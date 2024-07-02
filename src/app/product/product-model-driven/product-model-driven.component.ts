import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-model-driven',
  templateUrl: './product-model-driven.component.html',
  styleUrl: './product-model-driven.component.css'
})
export class ProductModelDrivenComponent {

  frm: FormGroup;
  fb = inject(FormBuilder); //to design the form

  constructor() {
    this.frm = this.fb.group({
      productId: this.fb.control('', [Validators.required]),
      productName: this.fb.control('', [Validators.required]),
      productCode: this.fb.control(''),
      price: this.fb.control(''),
      description: this.fb.group({
        shortDesc: this.fb.control(''),
        fullDesc: this.fb.control('')
      })
    });

    // this.frm = new FormGroup({
    //   productId: new FormControl()
    // })

    this.frm.get('productCode')?.valueChanges.subscribe(data => {

      console.log(data);
      let priceCtrl = this.frm.get('price');

      priceCtrl?.clearValidators();

      if (data != null && data.indexOf('P') != -1) {
        priceCtrl?.addValidators([Validators.required]);
      }

      priceCtrl?.updateValueAndValidity();

    })

  }

  saveProduct() {

    if (this.frm.valid) {
      let data = JSON.stringify(this.frm.value);
      let productId = this.frm.get('productId')?.value;
      alert('Product added successfully.' + data);
    }
  }

  disableValidation() {
    //find the control
    let productNameCtrl = this.frm.get('productName');

    //clear the validation
    productNameCtrl?.clearValidators();
    //productNameCtrl?.addValidators([Validators.pattern('^[a-zA-Z0-9 ]+$')]);

    //reflect changes in UI
    productNameCtrl?.updateValueAndValidity();
  }

  resetForm() {
    this.frm.reset();
  }

}
