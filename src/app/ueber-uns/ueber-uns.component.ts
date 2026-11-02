import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  standalone: false,
  selector: 'ueber-uns',
  templateUrl: './ueber-uns.component.html',
  styleUrls: ['./ueber-uns.component.less']
})
export class UeberUnsComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
