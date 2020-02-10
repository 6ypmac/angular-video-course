import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesPageComponent, CourseComponent, SearchComponent } from './courses-page';
import { BorderDecoratorDirective } from './directives';
import { TransformMinutesPipe, SearchByCourseNamePipe } from './pipes';

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
