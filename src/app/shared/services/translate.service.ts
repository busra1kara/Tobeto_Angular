import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private apiKey: string = 'AIzaSyA4A78-t5n7wtaKqKQORUtbTc3yqPFiWl0';
  private apiUrl: string = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) { }

  translate(text: string, targetLang: string): Observable<string> {
    const url = `${this.apiUrl}?key=${this.apiKey}`;
    const body = {
      q: text,
      target: targetLang
    };

    return this.http.post(url, body).pipe(
      map((response: any) => response.data.translations[0].translatedText)
    );
}
}