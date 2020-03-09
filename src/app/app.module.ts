import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
