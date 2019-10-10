import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {

  private _element : HTMLElement;

  constructor(el : ElementRef) {    

    this._element = el.nativeElement;

    /* tap into the document scroll event */
    document.addEventListener('scroll', () => {
      const hdrTop = this._element.getBoundingClientRect();
      //console.log(this._element.getBoundingClientRect());
      const docTop = this._getDocumentPosition();
      if(docTop > hdrTop.height) {
        console.log("stick");
      }
      //console.log(this._getDocumentPosition());      
    });
   }

   private _getDocumentPosition() : number {
      const docEl = document.documentElement;
      const docRect = docEl.getBoundingClientRect();

      /* this should take care of different browsers */
      const top = -docRect.top || document.body.scrollTop || window.scrollY || docEl.scrollTop || 0;      
      
      return top;
   }

}