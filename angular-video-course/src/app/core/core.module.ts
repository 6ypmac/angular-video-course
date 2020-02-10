import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, LogoComponent, UserLoginComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    UserLoginComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
