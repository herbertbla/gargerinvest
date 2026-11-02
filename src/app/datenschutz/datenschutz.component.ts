import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  standalone: false,
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.less']
})
export class DatenschutzComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
