import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
   templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit{
   
   employee: IEmployee;

   constructor(
      private employeeService: EmployeeService,
      private route: ActivatedRoute
   ) {}

   ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService
         .getEmployee(id)
         .subscribe(employee => this.employee = employee);
   }

}