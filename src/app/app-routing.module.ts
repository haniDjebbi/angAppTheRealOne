import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component' ;
import {AddEmpComponent} from './add-emp/add-emp.component' ;
import { from } from 'rxjs';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmpListComponent },
  { path: 'add', component: AddEmpComponent },
  { path: 'update', component: UpdateEmpComponent },
  { path: 'details', component: EmpDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
