import { Component } from '@angular/core';

@Component({
   selector: 'employee-app',
   template: `
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `
})
export class EmployeeAppComponent {

}