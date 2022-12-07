import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  title=""
  description=""
  venue=""
  duration=""
  date=""

  constructor (private api : ApiService)
  {

  }
  
  
readValues = ()=>
{
  let data : any= {"title":this.title,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
  console.log(data)
  this.api.addCourse(data).subscribe(
    
    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        alert("Added Successfully")
        this.title=""
        this.description=""
        this.venue=""
        this.duration=""
        this.date=""
      }
      else
      {
           alert("Not Added")
      }
    }


  )

}

}
