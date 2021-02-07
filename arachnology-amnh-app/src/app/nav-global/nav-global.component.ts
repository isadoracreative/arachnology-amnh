import { Component, OnInit } from '@angular/core';
import { NavGlobalLink } from '../nav-global-link';

@Component({
  selector: 'app-nav-global',
  templateUrl: './nav-global.component.html',
  styleUrls: ['./nav-global.component.scss']
})
export class NavGlobalComponent implements OnInit {

  navGlobalLink: NavGlobalLink = {
    navLink: 'People'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
