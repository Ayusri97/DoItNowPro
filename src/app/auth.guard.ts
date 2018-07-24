import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { employeeService } from './emplyeeService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: employeeService,
    private _router: Router) { }

  canActivate(): boolean {
    // if (this._authService.loggedIn()) {
    //   console.log('true')
    //   return true
    // } else {
    //   console.log('false')            
    //   this._router.navigate(['/UserLogin'])
      return false
    }
  }

