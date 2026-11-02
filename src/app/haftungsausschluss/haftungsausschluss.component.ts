import { LanguageService } from '../language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-haftungsausschluss',
  templateUrl: './haftungsausschluss.component.html',
  styleUrls: ['./haftungsausschluss.component.less']
})
export class HaftungsausschlussComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
