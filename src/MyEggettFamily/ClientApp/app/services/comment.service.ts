import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class CommentService {

    constructor(private http: Http) {}
    
    getComments(articleId) {
        return this.http.get(`/api/Comment/GetComments?articleId=${articleId}`)
            .map(result => result.json());
    }

    getCommentsAdmin() {
        return this.http.get('/api/Comment/GetCommentsAdmin')
            .map(result => result.json());
    }

    getSuggestionViews(userId) {
        return this.http.get(`/api/Comment/GetSuggestionViews?userId=${userId}` )
            .map(result => result.json());
    }

    saveComment(comment) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Comment/SaveComment',
            JSON.stringify(comment),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    updateComment(comment) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Comment/UpdateComment',
            JSON.stringify(comment),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    deleteComment(commentId) {
        return this.http.get(`/api/Comment/DeleteComment?commentId=${commentId}`).map(res => res.json);
    }

    updateSuggestion(feedback) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Comment/UpdateSuggestion',
            JSON.stringify(feedback),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    deleteSuggestion(feedbackId) {
        return this.http.get(`/api/Comment/DeleteSuggestion?suggestionId=${feedbackId}`).map(res => res.json);
    }

    getSuggestionTypes() {
        return this.http.get('/api/Comment/GetSuggestionTypes').map(res => res.json());
    }

    insertFeedback(feedback) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Comment/InsertSuggestion',
            JSON.stringify(feedback),
            {
                headers: headers
            })
            .map(res => res.json());
    }
}