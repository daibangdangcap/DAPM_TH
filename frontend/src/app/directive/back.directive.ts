import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBack]'
})
export class BackDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  backFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.preppend(item[item.length-1]);
  }
}
