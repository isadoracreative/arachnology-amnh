import { Component, OnInit } from '@angular/core';
import { NavGlobalLink } from '../nav-global-link';
import { NavGlobalSearch } from '../nav-global-search';

@Component({
  selector: 'app-nav-global',
  templateUrl: './nav-global.component.html',
  styleUrls: ['./nav-global.component.scss']
})
export class NavGlobalComponent implements OnInit {

  navGlobalLink: NavGlobalLink = {
    navLink: 'People'
  };
  navGlobalSearch: NavGlobalSearch = {
    navSearch: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
