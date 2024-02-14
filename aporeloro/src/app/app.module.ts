import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MainBannerModule } from './components/main-banner/main-banner.module';
import { StoreSectionModule } from './components/store-section/store-section.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainBannerModule,
    StoreSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
