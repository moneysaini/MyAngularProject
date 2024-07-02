import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMycustom]'
})
export class MycustomDirective {

  @Input('my-color')
  color: string|undefined;

  @Input('data')
  data: string = "";

  constructor(private ele: ElementRef) {
    console.log(this.ele.nativeElement);
    //this.ele.nativeElement.style.color = 'red';
   }

   @HostListener('mouseover')
   onMouseOver(){
    this.ele.nativeElement.style.color = this.color;
   }

   @HostListener('mouseout') 
   onMouseOutCallMe(){
    this.ele.nativeElement.style.color = 'black';
   }

   
   @HostListener('click')
   abc(){
    alert('Click me. Selected color is ' + this.data);
   }



}
