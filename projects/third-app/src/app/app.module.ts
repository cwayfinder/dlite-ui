import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyLibModule } from 'fancy-lib';
import { ExampleLibModule } from 'example-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FancyLibModule,
    ExampleLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
