import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { StickyHeaderDirective } from './sticky-header.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppHeaderComponent, StickyHeaderDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
