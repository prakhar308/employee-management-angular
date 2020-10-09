import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

import { EmployeeService } from "../employee.service";

@Component({
   templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

   constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private toastr: ToastrService,
   ) { }

   add(formValues) {
      this.employeeService
         .addEmployee(formValues)
         .subscribe(
            () => {
               this.router.navigate(['/employees'])
               this.toastr.success("Added new Employee");
            },
            (error) => this.toastr.error(error),
         )
   }
}