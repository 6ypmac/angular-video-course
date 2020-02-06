import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';
import { SearchComponent } from './courses-page/search/search.component';
import { BorderDecoratorDirective } from './directives/border-decorator.directive';
import { TransformMinutesPipe } from './pipes/transform-minutes.pipe';
import { SearchByCourseNamePipe } from './courses-page/search/search-by-course-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    CourseComponent,
    SearchComponent,
    BorderDecoratorDirective,
    TransformMinutesPipe,
    SearchByCourseNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    CoursesPageComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
