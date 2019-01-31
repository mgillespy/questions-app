import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-questions-show-one',
  templateUrl: './questions-show-one.component.html',
  styleUrls: ['./questions-show-one.component.css']
})
export class QuestionsShowOneComponent implements OnInit {
  question: any;
  message: any;
  id: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('touched ngOnInit from show-component.ts')
      this.id=params['id'];
      this.getOneQuestion(this.id)
  });
  }
//calls service from app/http.service.ts
  getOneQuestion(id){
      this._httpService.getOneQuestion(id).subscribe(data => {
          console.log('showed one question! printed from getOneQuestion at questions-show-one.components.ts ', data)
          this.question = data;
      });
  }
  addLike(Qid, Aid) {
    console.log('touched addLike method from questions-show-one.component.ts: Qid: ', Qid, 'Aid: ', Aid)
    this._httpService.addLike(Qid, Aid).subscribe(data => {
        console.log('added Like, printed from addLike at questions-show-one.components.ts', data);
        this.refreshAnswers(Qid)
    })
}
  downvote(Qid, Aid) {
  console.log('touched downvote method from questions-show-one.component.ts: Qid: ', Qid, 'Aid: ', Aid)
  this._httpService.downvote(Qid, Aid).subscribe(data => {
      console.log('downvoted, printed from downvote at questions-show-one.components.ts', data);
      this.refreshAnswers(Qid)
  })
}
  refreshAnswers(id){
    console.log('touched refreshAnswers from questions-show-one.component.ts')
    this._httpService.getOneQuestion(id).subscribe(data => {
      this.question = data;
        console.log("got answers to ", id, "printed from refreshAnswers at questions-show-one.component.ts")
    })
}
  deleteAnswer(Qid, Aid) {
      console.log('touched deleteAnswer method from questions-show-one.component.ts')
      this._httpService.deleteAnswer(Qid, Aid).subscribe(data => {
          console.log('deleted answer, printed from deleteAnswer at questions-show-one.components.ts', data);
          this.refreshAnswers(Qid);
      })
}
}


// refreshQuestions(){
//   let observable = this._httpService.getAllQuestions()
//     observable.subscribe(data =>  {
//         console.log("got all questions! printed from refreshQuestions questions-home.component.ts", data)
//         this.questions = data;
//   });
// }
// deleteQuestion(Qid) {
//     console.log('touched deleteQuestion method from questions-home.component.ts')
//     this._httpService.deleteQuestion(Qid).subscribe(data => {
//         console.log('deleted answer, printed from deleteQuestion at show-question.components.ts', data);
//         this.refreshQuestions()
//     })
// }

