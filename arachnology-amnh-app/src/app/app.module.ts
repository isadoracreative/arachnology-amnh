import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { AsideQuicklinksComponent } from './aside-quicklinks/aside-quicklinks.component';
import { ArticleReasonsComponent } from './article-reasons/article-reasons.component';
import { ArticleScience360Component } from './article-science360/article-science360.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    MainContentComponent,
    FooterGlobalComponent,
    AsideQuicklinksComponent,
    ArticleReasonsComponent,
    ArticleScience360Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
