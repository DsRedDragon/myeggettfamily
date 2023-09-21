import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppUser } from '../models/appUser.model';

@Injectable()
export class ProfileResolve implements Resolve<AppUser> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.getUser(route.params['id']);
    }
}