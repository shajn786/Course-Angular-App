import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseViewAllComponent } from './course-view-all/course-view-all.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoutes: Routes=[
  {
    path:"",component:CourseAddComponent
  },
  {
    path:"viewall",component:CourseViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseViewAllComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
