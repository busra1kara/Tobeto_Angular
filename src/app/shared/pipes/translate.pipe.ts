import { Pipe, type PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'appTranslate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService){}

  transform(value: string, targetLanguage: string): Observable<string> {
    return this.translateService.translate(value, targetLanguage);
  }

}
