import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions-ask',
  templateUrl: './questions-ask.component.html',
  styleUrls: ['./questions-ask.component.css']
})
export class QuestionsAskComponent implements OnInit {
  question = new Question();
  message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
    // called from app-routing.modules.ts; triggers method from app/http.service.ts
    createQuestion() {
    let observable = this._httpService.createQuestion(this.question);
    observable.subscribe(data => {
        if(data['errors']){
            this.message = data['errors'];
            console.log('here are the errors: ', this.message);
        }else{
            console.log('added question! printed from addQuestion at questions-ask.components.ts ', data);
            this.question = new Question();
            this._router.navigate(['questions'])
      }
    });
  }
}
