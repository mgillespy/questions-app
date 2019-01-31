import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAskComponent } from './questions-ask.component';

describe('QuestionsAskComponent', () => {
  let component: QuestionsAskComponent;
  let fixture: ComponentFixture<QuestionsAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
