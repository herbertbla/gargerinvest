import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
