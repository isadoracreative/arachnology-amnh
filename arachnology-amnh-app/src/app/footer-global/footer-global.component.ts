import { Component, OnInit } from '@angular/core';
import { SITEMAPLINKS } from '../site-map-links';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss']
})
export class FooterGlobalComponent implements OnInit {

  siteMapLinks = SITEMAPLINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
