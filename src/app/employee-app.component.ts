import { Component } from '@angular/core';

@Component({
   selector: 'employee-app',
   template: `
      <nav class='navbar navbar-expand navbar-bg'>
         <ul class='nav nav-pills'>
            <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" [routerLink]="['/employees']">Employee List</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" [routerLink]="['/employee-types']">Type List</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/employees/add']">Add Employee</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/employee-types/add']">Add Type</a></li>
         </ul>
      </nav>
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `
})
export class EmployeeAppComponent {

}