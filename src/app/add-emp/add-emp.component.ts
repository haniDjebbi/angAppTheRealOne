import { Component, OnInit } from '@angular/core';
import{ Employee}from '../../../shared/Employee';
import {EmpServiceService} from '../../../services/emp-service.service' ;
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService:EmpServiceService) { }

  ngOnInit() {
  }

 

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
