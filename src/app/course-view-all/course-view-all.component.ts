import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-view-all',
  templateUrl: './course-view-all.component.html',
  styleUrls: ['./course-view-all.component.css']
})
export class CourseViewAllComponent {

constructor(private api:ApiService)
{
       api.fetchCourses().subscribe(

        (response)=>
        {
           this.data =response
        }

       )
}

data:any =[]

}
