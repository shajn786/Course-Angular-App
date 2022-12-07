import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseViewAllComponent } from './course-view-all/course-view-all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component'

const myRoutes: Routes=[
  {
    path:"",component:CourseAddComponent
  },
  {
    path:"viewall",component:CourseViewAllComponent
  },
  {
    path:"search",component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseViewAllComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
