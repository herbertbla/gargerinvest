import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  standalone: false,
  selector: 'gi-header',
  templateUrl: './gi-header.component.html',
  styleUrls: ['./gi-header.component.less']
})
export class GiHeaderComponent implements OnInit {

  menuOpen = false;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
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
