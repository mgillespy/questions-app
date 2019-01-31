import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: 
    HttpClient) { }
      // called by app/<<componentname>>/component.ts; calls URL from server/config/routes.js

    getAllQuestions() {
        return this._http.get('/api/questions');
  }
    createQuestion(question) {
    return this._http.post('/api/questions/create', question);
    }
    getOneQuestion(id) {
        console.log('touched getOneQuestion at http.service.ts', id)
        return this._http.get(`/api/questions/${id}`);
    }
    getAnswers(id) {
        return this._http.get(`/api/questions/${id}`);
    }
    addAnswer(answer, id) {
        console.log('touched addAnswer at http.service.ts', answer)
        return this._http.post(`/api/questions/answer/${id}`, answer);
    }
    deleteQuestion(id) {
        console.log('touched deleteQuestion at http.service.ts')
        return this._http.get(`/api/questions/delete/${id}`)
    }
    deleteAnswer(Qid, Aid) {
        console.log('touched deleteAnswer at http.service.ts')
        return this._http.get(`/api/question/${Qid}/answer/delete/${Aid}`)
    }
    addLike(Qid, Aid) {
        console.log('touched addLike at http.service.ts', Qid, Aid)
        return this._http.get(`/api/question/${Qid}/like/${Aid}`)
    }
    downvote(Qid, Aid) {
        console.log('touched downvote at http.service.ts', Qid, Aid)
        return this._http.get(`/api/question/${Qid}/downvote/${Aid}`)
    }
}
