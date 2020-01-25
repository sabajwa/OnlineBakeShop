import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs'
import { tap, map, switchMap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth : AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.AppUser$.pipe(
          map((appUser => appUser.isAdmin)));
  }

}
