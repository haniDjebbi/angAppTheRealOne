import { Component, OnInit } from '@angular/core';
import { Employee } from 'shared/employee';
import { EmpServiceService } from 'services/emp-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {



  id: number;
  employee: object;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmpServiceService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}


