import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'gi-header',
  templateUrl: './gi-header.component.html',
  styleUrls: ['./gi-header.component.less']
})
export class GiHeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  getClass(menuItem: string) : string
  {
      let retClass =  'gspmenuitem';
      if (this.location.path().includes(menuItem)) {
          retClass = 'gspmenuitem-active';
      }

      return retClass;
  }

}
