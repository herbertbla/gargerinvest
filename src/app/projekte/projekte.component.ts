import { LanguageService } from '../language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.less']
})
export class ProjekteComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
