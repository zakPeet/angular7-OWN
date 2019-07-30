import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentDataServiceService } from './student-data-service.service';
import { StudentComponentComponent } from './student-component/student-component.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StudentComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentDataServiceService]
})
export class AppModule { }
