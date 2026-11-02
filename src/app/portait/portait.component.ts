import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  standalone: false,
  selector: 'portait',
  templateUrl: './portait.component.html',
  styleUrls: ['./portait.component.less']
})
export class PortaitComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
