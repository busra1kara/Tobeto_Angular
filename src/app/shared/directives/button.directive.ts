import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit { 
  @Input() buttonHover: string = 'white';

  constructor(private element: ElementRef){}

  buttonElement = this.element.nativeElement.style;

  ngOnInit(): void {
    this.buttonElement.transition = 'all .5s ease';
    this.buttonElement.color = `${this.buttonHover}`;
    this.buttonElement.border = '3px solid white';
    this.buttonElement.fontFamily = 'Montserrat, sans-serif';
    this.buttonElement.textTransform = 'uppercase';
    this.buttonElement.textAlign = 'center';
    this.buttonElement.lineHeight = '1';
    this.buttonElement.fontSize = '17px';
    this.buttonElement.backgroundColor = 'red';
    this.buttonElement.padding = '1rem';
    this.buttonElement.borderRadius = '2rem';
    this.buttonElement.outline = 'none';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.buttonElement.color = 'red';
    this.buttonElement.backgroundColor = 'white';
    this.buttonElement.border = '1px solid red';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.buttonElement.color = 'white';
    this.buttonElement.backgroundColor = 'red';
    this.buttonElement.border = 'none';
  }
}
