import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { IEmployee } from '../employee.model';

import { EmployeeService } from "../../services/employee.service";
import { IEmployeeType } from 'src/app/employee-types/employee-type.model';
import { EmployeeTypeService } from 'src/app/services/employee-type.service';

@Component({
   templateUrl: '../../shared/employee-form.component.html'
})
export class AddEmployeeComponent implements OnInit{

   employee: IEmployee = {
      id: null,
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dob: null,
      phone: "",
      bio: "",
      employeeType: {
         id: null,
         type: ""
      }
   }
   employeeTypes: IEmployeeType[];

   constructor(
      private employeeService: EmployeeService,
      private employeeTypeService: EmployeeTypeService,
      private router: Router,
      private toastr: ToastrService,
   ) { }

   ngOnInit() {
      this.employeeTypeService
         .getEmployeeTypes()
         .subscribe((employeeTypes) => {
            this.employeeTypes = employeeTypes
         })
   }

   onSubmit(formValues) {
      formValues.EmployeeTypeId = +formValues.EmployeeTypeId;
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