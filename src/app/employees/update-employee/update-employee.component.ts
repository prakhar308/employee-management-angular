import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { IEmployee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
   templateUrl: 'update-employee.component.html'
})
export class UpdateEmployeeComponent implements OnInit{

   employee: IEmployee;

   constructor(
      private employeeService: EmployeeService,
      private route: ActivatedRoute,
      private router: Router, 
      private toastr: ToastrService,  
   ) {}

   ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id')
      this.employeeService
         .getEmployee(id)
         .subscribe(employee => {
            this.employee = employee;
         })
   }

   update(formValues) {
      // add id field to formValues object
      formValues.id = +this.route.snapshot.paramMap.get('id');
      this.employeeService
         .updateEmployee(formValues)
         .subscribe(() => {
            this.router.navigate(['/employees'])
            this.toastr.success("Updated successfully")
         })
   }

}