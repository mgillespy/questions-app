import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Answer } from '../Answer';
import { Question } from '../Question'

@Component({
  selector: 'app-questions-answer',
  templateUrl: './questions-answer.component.html',
  styleUrls: ['./questions-answer.component.css']
})
export class QuestionsAnswerComponent implements OnInit {
  question: any;
  newAnswer: any; 
  answer = new Answer;
  message: any;
  id: any;

  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
   ) { }
     ngOnInit() {
    this.newAnswer = { answerer: "", content: "", details: ""}
    this._route.params.subscribe((params: Params) => {
        this.id=params['id']
        let observable = this._httpService.getOneQuestion(this.id);
        observable.subscribe(data => {
            console.log('showed one question! printed from answer-question.components.ts ngOnInit', data)
            this.question = data;
        })
    });
    }
//calls service from app/http.service.ts
    addAnswer(id) {
        console.log("hit addAnswer method from answer-question.component.ts", this.answer)
        let observable = this._httpService.addAnswer(this.answer, id);
        observable.subscribe(data => {
            if(data['errors']){
                this.message = data['errors'];
                console.log('here are the errors: ', this.message);
            }else{
                console.log('added answer! printed from answer-question.components.ts ', data);
                this.newAnswer = data;
                this._router.navigate([`/questions/${id}`])
        }
    });
}
}

