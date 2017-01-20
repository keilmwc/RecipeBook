import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private _isOpen = false;

  /*Bind CSS class to element*/
  @HostBinding('class.open') get opened(){
    return this._isOpen;
  }

  /*When the element is clicked set true & open DD*/
  @HostListener('click') open(){
    return this._isOpen = true;
  }

  /*When the element is clicked set false & close DD*/
  @HostListener('mouseleave') close(){
    return this._isOpen = false;
  }
}
