import { Injectable } from '@angular/core';
import { Student } from './studentClass';
import { Stude } from './student_details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',     //When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
})
export class StudentDataServiceService {
     getStudents(): Observable <Student[]>{
       return of(Stude);
     }
  constructor() { }

}