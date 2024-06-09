import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective {
  private _hasView: boolean = false;

  @Input() set appIfNot(condition: boolean){  //Input'un gelen veriyi alırken set ile kullanılması bu veri üzerinde işlem yapmayı sağlar. Gelen verinin değişmesi gereken durumlarda kullanılır

    if(!condition === this._hasView) return;
    if(!condition === true) this.createView();
    else this.destroyView();
  }

  @Input() appIfNotElse: TemplateRef<HTMLElement> | null = null; //TemplateRef genellikle Angular şablonlarının dinamik olarak tasarlanmasını sağlar. Sayfada bir render HTML'in belirli koşullara göre oluşturulup oluşturulmamasını sağlar. ElementRef'te element sayfada görünmese bile yeri ayrılmıştır, TemplateRef'te ise element ya vardır ya da sayfada hiç yoktur. Jenerik tanımlamada yer alan HTMLElement ise TemplateRef şablonun türünü belirtir.

  constructor(
    private viewContainer: ViewContainerRef, //TemplateRef'leri sayfaya yerleştirmek için kullanılır
    private template: TemplateRef<HTMLElement>
  ){}

  createView() {
    this.viewContainer.createEmbeddedView(this.template); //Belirtilen şablonu kullanarak yeni bir görünüm oluşturur ve viewcontainer içine ekler.
    this._hasView = true; 
  } 

  destroyView() {
    this.viewContainer.clear();
    if(this.appIfNotElse)
      this.viewContainer.createEmbeddedView(this.appIfNotElse);
  }
}
