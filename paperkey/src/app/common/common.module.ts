import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import { MenuComponent } from './menu/menu.component';
import { FootterComponent } from './footter/footter.component';
import {MouseOnMaskDirective} from "./Directive/mouse-on-mask.directive";

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    FootterComponent,
    MouseOnMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MouseOnMaskDirective,
    MenuComponent,
    FootterComponent]
})
export class PaperCommonModule { }
