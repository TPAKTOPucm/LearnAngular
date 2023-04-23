import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LoginPageComponent,
    CardGalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path: '',
      component: CardGalleryComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
