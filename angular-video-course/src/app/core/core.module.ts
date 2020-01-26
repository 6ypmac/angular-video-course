import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { CourseComponent } from './courses-page/course/course.component';
import { SearchComponent } from './courses-page/search/search.component';
import { FormsModule } from '@angular/forms';
import { CourseFreshnessDirective } from './courses-page/course/course-freshness.directive';
import { CourseDurationPipe } from './courses-page/course/course-duration.pipe';
import { SearchByCourseNamePipe } from './courses-page/search/search-by-course-name.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    CoursesPageComponent,
    UserLoginComponent,
    CourseComponent,
    SearchComponent,
    CourseFreshnessDirective,
    CourseDurationPipe,
    SearchByCourseNamePipe],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
