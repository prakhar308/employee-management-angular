import { Component, OnInit } from '@angular/core';

import { IEmployeeType } from "../employee-type.model";
import { EmployeeTypeService } from "../../services/employee-type.service";

@Component({
   templateUrl: './employee-type-list.component.html'
})
export class EmployeeTypeListComponent implements OnInit{
   
   employeeTypes: IEmployeeType[]

   constructor(private employeeTypeService: EmployeeTypeService) { }

   ngOnInit(){
      this.employeeTypeService
         .getEmployeeTypes()
         .subscribe((employeeTypes) => {
            this.employeeTypes = employeeTypes
         })
   }
}