import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuestionsHomeComponent } from './questions-home/questions-home.component';
import { QuestionsShowOneComponent } from './questions-show-one/questions-show-one.component';
import { QuestionsAnswerComponent } from './questions-answer/questions-answer.component';
import { QuestionsAskComponent } from './questions-ask/questions-ask.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsHomeComponent,
    QuestionsShowOneComponent,
    QuestionsAnswerComponent,
    QuestionsAskComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
