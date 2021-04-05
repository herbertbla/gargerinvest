import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'gi-footer',
  templateUrl: './gi-footer.component.html',
  styleUrls: ['./gi-footer.component.less']
})
export class GiFooterComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }


  getClass(menuItem: string) : string
  {
    let retClass =  'gspmenuitem-small';
    if (this.location.path().includes(menuItem)) {
      retClass = 'gspmenuitem-small-active';
    }

    return retClass;
  }

}
