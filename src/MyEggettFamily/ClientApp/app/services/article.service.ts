import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {}

    getArticles() {
        return this.http.get('/api/Article/GetArticles')
            .map(result => result.json());
    }

    deleteArticle(articleId) {
        return this.http.get(`/api/Article/DeleteArticle?articleId=${articleId}`).map(res => res.json);
    }

    getArticlesList(activeOnly) {
        return this.http.get(`/api/Article/GetArticlesList?activeOnly=${activeOnly}`)
            .map(result => result.json());
    }

    getArticle(articleId) {
        return this.http.get(`/api/Article/GetArticle?articleId=${articleId}`)
            .map(result => result.json());
    }

    getArchiveList() {
        return this.http.get(`/api/Article/GetArchiveList`)
            .map(result => result.json());
    }

    getArchivesByMonth(id) {
        return this.http.get(`/api/Article/GetArchivesByMonth?start=${id}`)
            .map(result => result.json());
    }

    saveArticle(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Article/UpdateArticle',
                JSON.stringify(article),
                {
                    headers: headers
                })
            .map(res => res.json());
    }

    sendNotification(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Article/SendNotification',
            JSON.stringify(article),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    sendSubmittedNotification(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Article/SendSubmittedNotification',
            JSON.stringify(article),
            {
                headers: headers
            })
            .map(res => res.json());
    }
}