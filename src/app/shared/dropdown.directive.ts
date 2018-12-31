// The course was designed with Bootstrap 3, which has major security issues now
// This exercise does not work with Bootstrap 4 as demonstrated, 
// the working code was found here: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/questions/2898796

import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 
  constructor (private el: ElementRef, private renderer: Renderer2) {}
 
  @HostBinding('class.show') isOpen = false;
 
  @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
      let part = this.el.nativeElement.querySelector('.dropdown-menu');
      if(this.isOpen)
        this.renderer.addClass(part, 'show');
      else
        this.renderer.removeClass(part, 'show');
  }
}