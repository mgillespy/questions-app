import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.css']
})
export class QuestionsHomeComponent implements OnInit {
  questions: any;
  question: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
      // called from app-routing.modules.ts; triggers method from app/http.service.ts
      let observable = this._httpService.getAllQuestions()
      observable.subscribe(data =>  {
          console.log("got all questions! printed from ngOnInit questions-home.component.ts", data)
          this.questions = data;
    });
  }
  refreshQuestions(){
    let observable = this._httpService.getAllQuestions()
      observable.subscribe(data =>  {
          console.log("got all questions! printed from refreshQuestions questions-home.component.ts", data)
          this.questions = data;
    });
}
  deleteQuestion(Qid) {
      console.log('touched deleteQuestion method from questions-home.component.ts')
      this._httpService.deleteQuestion(Qid).subscribe(data => {
          console.log('deleted answer, printed from deleteQuestion at show-question.components.ts', data);
          this.refreshQuestions()
      })
}
}

