import { Component, OnInit } from '@angular/core';
import { Employee } from '../DoItNowClasses';
import { Router } from '@angular/router';
import { employeeService } from '../emplyeeService.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {

  private employee: Employee;
  constructor(
    private q: employeeService,
    private route: Router,

  ) { }

  ngOnInit() {
  }
  LoginEmployee = function (obj) {
    console.log(obj.Email, obj.Password)
    this.employee = {

      "Email": obj.Email,
      "Password": obj.Password
    }


    this.q.loginUser(this.employee).subscribe(
      success => {
        this.route.navigate(['/UserHome'])
      }
    )
  }
}
