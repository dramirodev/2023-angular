import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LazyImageComponent} from "./components/lazy-image/lazy-image.component";
import {SideBarComponent} from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    SideBarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    LazyImageComponent
  ],
})
export class SharedModule { }
