import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppModule } from '../../../app.module';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { Observable } from 'rxjs';
import { TranslateService } from '../../../shared/services/translate.service';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    CommonModule,
    AppModule,
    TranslatePipe
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {
  inputText: string = '';
  selectedLang: string = 'en';
  languages = ['en', 'tr'];
  translatedText$?: Observable<string>;

  constructor(private translateService: TranslateService){}

  onLangChange(lang: string) {
    this.selectedLang = lang;
    this.translate();
  }

  translate() {
    this.translatedText$ = this.translateService.translate(this.inputText, this.selectedLang);
  }
 }
