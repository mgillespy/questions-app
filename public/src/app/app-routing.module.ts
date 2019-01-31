import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsHomeComponent } from './questions-home/questions-home.component';
import { QuestionsShowOneComponent } from './questions-show-one/questions-show-one.component';
import { QuestionsAnswerComponent } from './questions-answer/questions-answer.component';
import { QuestionsAskComponent } from './questions-ask/questions-ask.component';

const routes: Routes = [
    //goes to <<componentname>>.component.ts
    { path: 'questions', component: QuestionsHomeComponent },
    { path: 'questions/new', component: QuestionsAskComponent },
    { path: 'questions/:id', component: QuestionsShowOneComponent },
    { path: 'questions/:id/answer', component: QuestionsAnswerComponent },
    { path: '', redirectTo: 'questions', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }