# EmployeeManagement - CRUD Operations in Angular

The project doesn't require a data server. It relies on the [Angular in-memory-web-api](#https://github.com/angular/in-memory-web-api/blob/master/README.md) which replaces the HttpClient module's HttpBackend. The replacement service simulates the behavior of a REST-like backend.

**Routes**
```
GET      - /employees      - all employees
GET      - /employees/:2   - employee with id 2
POST     - /employees      - add new employee
PUT      - /employees      - update the employee using the id passed in the object
DELETE   - /employees/:2   - delete employee with id 2
```

**Employee Model**

```js
{
   id: 1,
   firstName: 'John',
   lastName: 'Doe',
   email: 'john@yahoo.com',
   salary: 50000,
   phone: 9874563211
}
```

**Quick Start**
```bash
# Get the latest snapshot
git clone https://github.com/prakhar308/employee-management-angular.git

# Change directory
cd employee-management-angular

# Install dependencies
npm install

# Serve on localhost
npm start
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

