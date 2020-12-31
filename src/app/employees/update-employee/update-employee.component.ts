import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { IEmployee } from '../employee.model';
import { EmployeeService } from '../../services/employee.service';
import { IEmployeeType } from 'src/app/employee-types/employee-type.model';
import { EmployeeTypeService } from 'src/app/services/employee-type.service';

@Component({
   templateUrl: '../../shared/employee-form.component.html'
})
export class UpdateEmployeeComponent implements OnInit{

   employee: IEmployee;
   employeeTypes: IEmployeeType[];

   constructor(
      private employeeService: EmployeeService,
      private employeeTypeService: EmployeeTypeService,
      private route: ActivatedRoute,
      private router: Router, 
      private toastr: ToastrService,  
   ) {}

   ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id')

      // get employee types
      this.employeeTypeService
         .getEmployeeTypes()
         .subscribe((employeeTypes) => {
            this.employeeTypes = employeeTypes
         })

      // get current employee details
      this.employeeService
         .getEmployee(id)
         .subscribe(employee => {
            this.employee = employee;
            this.employee.dob = this.employee.dob.toString().split('T')[0];
         })
   }

   onSubmit(formValues) {
      // add id field to formValues object
      let id = +this.route.snapshot.paramMap.get('id');
      formValues.id = id;
      formValues.EmployeeTypeId = +formValues.EmployeeTypeId;
      this.employeeService
         .updateEmployee(id, formValues)
         .subscribe(() => {
            this.router.navigate(['/employees'])
            this.toastr.success("Updated successfully")
         })
   }

}