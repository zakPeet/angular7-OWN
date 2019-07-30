import { Component, OnInit } from '@angular/core';
import {Student} from '../studentClass';
import {StudentDataServiceService} from '../student-data-service.service'
import {Stude} from '../student_details';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
    students = Stude;
  constructor(private studentdataService: StudentDataServiceService) { 

  }

  ngOnInit() {
  }
  getStudents():void{
    this.studentdataService.getStudents()
     .subscribe(students => this.students=students);
  }

}