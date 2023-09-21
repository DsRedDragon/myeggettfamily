import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppUser } from '../models/appUser.model';
import { ExternalData } from '../models/externalData.model';
import { SettingService } from '../services/setting.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
 
@Injectable()
export class UserService {

    @ViewChild('loginModal') public loginModal: ModalDirective;

    userList: AppUser[];
    user: AppUser;
    myUser: AppUser;
    userInfoChanged: boolean = false;
    isLoggedIn = false;
    userId = 0;
    stateChange = new Subject<boolean>();
    userChange= new Subject<number>();
    userObjectChange = new Subject<AppUser>();
    userListObjectChange = new Subject<AppUser[]>();
    
    constructor(private http: Http, private router: Router, private settingService: SettingService, private activatedRoute: ActivatedRoute) {
        
    }

    getUser(id) {
        return this.http.get(`/api/User/GetAppUserById?id=${id}`)
            .map(result => result.json());
    }

    getQuestion(username) {
        return this.http.get(`/api/User/GetQuestion?username=${username}`)
            .map(result => result.json());
    }

    resetPassword(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/User/ResetPassword',
            JSON.stringify(user),
            {
                headers: headers
            })
            .map(res => res.json());
    }
    
    checkUsername(name, id) {
        return this.http.get(`/api/User/CheckUsername?username=${name}&id=${id}`)
            .map(result => result.json());
    }

    getApplicationUsers() {
        return this.http.get('/api/User/GetApplicationUsers')
            .map(result => result.json());
    }

    getApplicationUsersForNotifications() {
        return this.http.get('/api/User/GetApplicationUsersForNotifications')
            .map(result => result.json());
    }

    saveProfile(user, code) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`/api/User/UpdateUser?code=${code}`,
            JSON.stringify(user),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    saveImageUrl(url) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;

        return this.http.post('/api/User/UpdateUserDetail',
            JSON.stringify(this.user.applicationUserDetail),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    logout(): void {
        
        this.router.navigate(['/login']);
        this.user = undefined;
        Cookie.delete('AUID');
        this.change(false);
    };

    login(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var res = Observable.create(obs => {

            this.http.post('/api/User/Login',
                    JSON.stringify(user),
                    {
                        headers: headers
                    })
                .map(res => res.json())
                .subscribe(result => {
                    if (result !== undefined && result.applicationUserId > 0) {
                        this.user = result;
                        this.userId = result.applicationUserId;
                        Cookie.set('AUID', this.userId.toString(), 30);
                        this.change(true);
                        obs.next(this.userId);
                        obs.complete();
                    } else {
                        this.router.navigate(['/login']);
                        this.user = undefined;
                        Cookie.delete('AUID');
                        this.change(false);
                        obs.next(this.userId);
                        obs.complete();
                    }
                });
        });

        return res;
    };

    saveLoginTime(fromCheck)
    {
        var continueSave = false;
        if (fromCheck) {
            var d = new Date();
            d.setDate(d.getDate() - 1);

            if (new Date(this.user.lastLoggedInDt) < d) {
                continueSave = true;
            }
        }
        else
        {
            continueSave = true;
        }

        if (continueSave) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            return this.http.post('/api/User/UpdateTime',
                JSON.stringify(this.user),
                {
                    headers: headers
                })
                .map(res => res.json());
        }
        else
        {
            return Observable.empty();
        }
    }

    checkLogin(url) {

        var res = Observable.create(obs => {
            let myCookie = Cookie.get('AUID');
            if (myCookie !== null && myCookie !== undefined) {
                this.getUser(myCookie)
                    .subscribe(res => {
                        this.user = res;
                        this.userId = res.applicationUserId;
                        this.change(true);
                        this.saveLoginTime(true).subscribe(x => {
                            var result = x;
                        });
                        obs.next(this.isLoggedIn);
                        obs.complete();
                    });
            } else {
                obs.next(this.isLoggedIn);
                obs.complete();
                this.router.navigate(['/login', url.substring(1)]);
            }
        });
        return res;
    };
    
    change(login) {
        this.isLoggedIn = login;
        this.userObjectChange.next(this.user);
        this.userChange.next(this.userId);
        this.stateChange.next(this.isLoggedIn);
        this.userListObjectChange.next(this.userList);
    }
}