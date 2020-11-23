import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee.model';

import { EmployeeService } from "../../services/employee.service";
import { ToastrService } from "../../shared/toastr.service";

@Component({
   templateUrl: './employee-list.component.html',
   styles: [`
      td button {
         margin-right: 10px;
      }
   `]
})
export class EmployeeListComponent implements OnInit {

   employees: IEmployee[];
   detailedEmployee: IEmployee;

   constructor(
      private employeeService: EmployeeService,
      private toastr: ToastrService,
   ) { }

   ngOnInit() {
      // get all employees
      this.employeeService
         .getEmployees()
         .subscribe(employees => {
            this.employees = employees
         })
   }

   delete(id: number) {
      this.employeeService
         .deleteEmployee(id)
         .subscribe(() => {
            // update component
            this.employees = this.employees.filter(emp => emp.id !== id)
            this.toastr.success("Deleted successfully");
         })
   }

   getDetails(id: number) {
      this.employeeService
         .getEmployee(id)
         .subscribe(employee => this.detailedEmployee = employee);
   }

   public keepOriginalOrder = (a, b) => a.key;
}