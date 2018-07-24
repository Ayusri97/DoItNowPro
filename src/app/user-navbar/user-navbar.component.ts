import { Component, OnInit } from '@angular/core';
import { employeeService }from '../emplyeeService.service'

@Component({
  selector: 'UserNavBar',
  templateUrl: './user-navbar.component.html',
  styles: []
})
export class UserNavbarComponent implements OnInit {

  constructor(private _authService :employeeService) { }

  ngOnInit() {
  }

}
