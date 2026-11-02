import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  standalone: false,
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.less']
})
export class KontaktComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
