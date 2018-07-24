import { Component, OnInit } from '@angular/core';
import { employeeService}from '../emplyeeService.service'

@Component({
  selector: 'MainNav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService :employeeService) { }

  ngOnInit() {
  }

}
