
import {Directive, ElementRef,Input,OnInit} from '@angular/core';
@Directive({
   selector:'[color2]'

})
export class directive2 implements OnInit{
   @Input() color2! : string;
   constructor(private e3:ElementRef){}
   ngOnInit() {
       this.e3.nativeElement.style.backgroundColor=this.color2;
       
   }
}