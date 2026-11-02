import { LanguageService } from '../language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.less']
})
export class ImpressumComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
