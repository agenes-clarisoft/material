import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatComponentsModule } from "./mat-components.module";
import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from "./course.service";

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass: CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
