import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor (private api : ApiService)
  {

  }
  
  
readValues = ()=>
{
  let data : any= {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
  this.api.addCourse(data).subscribe(
    
    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        alert("Added Successfully")
        this.courseDate=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseTitle=""
        this.courseVenue=""
      }
      else
      {
           alert("Not Added")
      }
    }


  )

}

}
