import { Component, OnInit } from '@angular/core';
import { NavGlobalLink } from '../nav-global-link';
import { NAVGLOBALLINKS } from '../nav-global-links';
import { NavGlobalSearch } from '../nav-global-search';

@Component({
  selector: 'app-nav-global',
  templateUrl: './nav-global.component.html',
  styleUrls: ['./nav-global.component.scss']
})
export class NavGlobalComponent implements OnInit {

  // navGlobalLink: NavGlobalLink = {
  //   navLink: ''
  // };
  navGlobalLinks = NAVGLOBALLINKS;
  navGlobalSearch: NavGlobalSearch = {
    navSearch: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
