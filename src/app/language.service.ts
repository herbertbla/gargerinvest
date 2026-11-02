import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  current: 'de' | 'en' = localStorage.getItem('gargerinvest-language') === 'en' ? 'en' : 'de';

  constructor() {
    document.documentElement.lang = this.current;
  }

  set(language: 'de' | 'en'): void {
    this.current = language;
    localStorage.setItem('gargerinvest-language', language);
    document.documentElement.lang = language;
  }
}
