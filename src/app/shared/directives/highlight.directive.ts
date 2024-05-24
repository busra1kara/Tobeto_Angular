import { DatePipe } from '@angular/common';
import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  providers: [DatePipe]
})
export class HighlightDirective implements OnInit { 
  // Uygulandığı ilgili elementin referansı üzerinden elemente istenilen değişiklik ve özellikler kazandırılabilir. JS DOM Manipulation gibi

  @Input() appHighlight: string = 'yellow'; //directive'in kendi adı kullanılarak yalnızca bir kez input verilebilir => <div appHighlight = "yellow"></div>
  @Input() labelText?: string;

  date: number = Date.now();
  saleDate: string | null = this.datePipe.transform(this.date, 'yyyy-MM-dd');

  constructor(private element: ElementRef<HTMLElement>, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.element.nativeElement.style.background = this.appHighlight;

    if(this.labelText){
      const span = document.createElement('span');
      span.innerText = this.labelText + " until " + this.saleDate + "!";
      span.style.backgroundColor = 'lightgreen';
      span.style.padding = '5px';
      span.style.borderRadius = '5px';
      span.style.marginLeft = '2px';
      span.style.fontSize = '1em';
      span.style.fontWeight = 'bold';
      this.element.nativeElement.appendChild(span);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.element.nativeElement.style.backgroundColor = this.appHighlight;
  }
}
