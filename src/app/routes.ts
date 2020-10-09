import { Routes } from "@angular/router";

import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { UpdateEmployeeComponent } from "./employees/update-employee/update-employee.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { EmployeeDetailComponent } from "./employees/employee-details/employee-detail.component";

export const appRoutes: Routes = [
   { path: 'employees/add', component: AddEmployeeComponent },
   { path: 'employees/update/:id', component: UpdateEmployeeComponent },
   { path: 'employees/:id', component: EmployeeDetailComponent },
   { path: 'employees', component: EmployeeListComponent },
   { path: '', redirectTo: 'employees', pathMatch: 'full' },
   { path: '**', redirectTo: 'employees', pathMatch: 'full' }
]