import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeTypeService } from 'src/app/services/employee-type.service';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
   templateUrl: './add-employee-type.component.html'
})
export class AddEmployeeTypeComponent {
   
   constructor(
      private employeeTypeService: EmployeeTypeService,
      private router: Router,
      private toastr: ToastrService,
   ) {}

   onSubmit(formValues) {
      this.employeeTypeService
         .addEmployeeType(formValues)
         .subscribe(
            () => {
               this.router.navigate(['/employee-types'])
               this.toastr.success("Added new Employee Type");
            },
            (error) => this.toastr.error(error),
         )
   }
}