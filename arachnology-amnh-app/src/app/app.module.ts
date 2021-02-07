import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { AsideQuicklinksComponent } from './aside-quicklinks/aside-quicklinks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    MainContentComponent,
    FooterGlobalComponent,
    AsideQuicklinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
