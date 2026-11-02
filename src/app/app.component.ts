import { Component } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public language: LanguageService) {}
}
