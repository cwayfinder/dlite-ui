import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyLibModule } from 'fancy-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FancyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
