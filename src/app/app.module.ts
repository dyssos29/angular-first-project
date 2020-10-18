import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second/second.component';
import { FirstDirective } from './first/first.directive';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstDirective
  ],
  imports: [
    BrowserModule,
    WrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
