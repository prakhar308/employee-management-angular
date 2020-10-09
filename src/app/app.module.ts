import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { EmployeeAppComponent } from "./employee-app.component";
import { appRoutes } from "./routes";
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from "./employees/update-employee/update-employee.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { EmployeeDetailComponent } from './employees/employee-details/employee-detail.component';

@NgModule({
   declarations: [
      EmployeeAppComponent,
      EmployeeListComponent,
      UpdateEmployeeComponent,
      AddEmployeeComponent,
      EmployeeDetailComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [EmployeeAppComponent]
})
export class AppModule { }
