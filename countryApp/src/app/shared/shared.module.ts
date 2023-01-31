import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoadingComponent} from './components/loading/loading.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    LoadingComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
