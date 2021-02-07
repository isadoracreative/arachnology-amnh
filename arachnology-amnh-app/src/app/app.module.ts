import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { AsideQuicklinksComponent } from './aside-quicklinks/aside-quicklinks.component';
import { ArticleReasonsComponent } from './article-reasons/article-reasons.component';
import { ArticleScience360Component } from './article-science360/article-science360.component';
import { AsideRelatedProjectsComponent } from './aside-related-projects/aside-related-projects.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NavGlobalComponent } from './nav-global/nav-global.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    FooterGlobalComponent,
    AsideQuicklinksComponent,
    ArticleReasonsComponent,
    ArticleScience360Component,
    AsideRelatedProjectsComponent,
    MainHomeComponent,
    NavGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
