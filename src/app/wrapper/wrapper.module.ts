import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { NavComponent } from './wrapper/nav/nav.component';
import { ContentComponent } from './wrapper/content/content.component';
import { FooterComponent } from './wrapper/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, ContentComponent, FooterComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NavComponent, ContentComponent, FooterComponent, WrapperComponent]
})
export class WrapperModule {}
