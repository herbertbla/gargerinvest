import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly selected = signal<'de' | 'en'>(
    localStorage.getItem('gargerinvest-language') === 'en' ? 'en' : 'de'
  );

  get current(): 'de' | 'en' {
    return this.selected();
  }

  constructor() {
    document.documentElement.lang = this.current;
  }

  set(language: 'de' | 'en'): void {
    this.selected.set(language);
    localStorage.setItem('gargerinvest-language', language);
    document.documentElement.lang = language;
  }
}
