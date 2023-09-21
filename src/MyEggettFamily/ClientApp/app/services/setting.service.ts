import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class SettingService {

    constructor(private http: Http) {}

    getSettings() {
        return this.http.get('/api/Setting/GetSettings')
            .map(result => result.json());
    }

    getStates() {
        return this.http.get('/api/Setting/GetStates')
            .map(result => result.json());
    }

    getCountries() {
        return this.http.get('/api/Setting/GetCountries')
            .map(result => result.json());
    }
    
    getSetting(settingId) {
        return this.http.get(`/api/Setting/GetSetting?settingId=${settingId}`)
            .map(result => result.json());
    }

    saveSettings(setting) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Setting/UpdateSettings',
            JSON.stringify(setting),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    saveSetting(setting) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Setting/UpdateSetting',
                JSON.stringify(setting),
                {
                    headers: headers
                })
            .map(res => res.json());
    }
}