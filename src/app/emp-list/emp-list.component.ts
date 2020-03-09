import { Component, OnInit } from '@angular/core';
import{ Employee}from '../../../shared/Employee';
import {EmpServiceService} from '../../../services/emp-service.service' ;
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  [x: string]: any;
employees: Observable<Employee[]> ;
  constructor(private employeeService:EmpServiceService ,private router:Router) { }

  ngOnInit(): void {
  this.reloadData() ;
  }
reloadData(){
  this.employees=this.employeeService.listEmployee() ;
}
deleteEmployee(id:number){
  this.employeeService.delteEmployee(id) .subscribe(
    data =>{console.log(data)
    this.reloadData() ;
    },
    error =>console.log(error));
  
  
}
updateEmployee(id:number){

}
detailsEmployee(id:number){
  this.router.navigate(['details']);
}
}
